import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, TrendingDown, CheckCircle, RefreshCcw } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import GlassCard from '../ui/GlassCard';
import { HubSpotLeadForm } from './HubSpotLeadForm';
import './LostRevenueAudit.css';

const LostRevenueAudit = () => {
    const [step, setStep] = useState(1);
    const [rooms, setRooms] = useState('');
    const [adr, setAdr] = useState('');
    const [missedCalls, setMissedCalls] = useState('');
    const [isCalculating, setIsCalculating] = useState(false);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-MY', {
            style: 'currency',
            currency: 'MYR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleNext = () => {
        if (step === 3) {
            setIsCalculating(true);
            setTimeout(() => {
                setIsCalculating(false);
                setStep(4);
            }, 1500);
        } else {
            setStep(step + 1);
        }
    };

    // Calculation Logic
    // Assumption: 30% of missed calls would have booked, average length of stay is 2.5 nights.
    const weeklyLost = (Number(missedCalls) || 0) * 0.3 * (Number(adr) || 0) * 2.5;
    const yearlyLost = weeklyLost * 52;

    return (
        <GlassCard variant="gradient" className="audit-card" style={{ maxWidth: '600px', margin: '0 auto', overflow: 'hidden' }}>
            <div className="audit-header text-center" style={{ marginBottom: '2rem' }}>
                <Calculator size={40} className="text-neon-cyan mb-4 mx-auto inline-block" />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Lost Revenue Audit</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Discover how much money is slipping through the cracks.</p>
            </div>

            <div className="audit-progress" style={{ display: 'flex', gap: '8px', marginBottom: '2rem' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                    <div
                        key={i}
                        style={{
                            height: '4px',
                            flex: 1,
                            background: i <= step ? 'var(--color-neon-cyan)' : 'rgba(255,255,255,0.1)',
                            borderRadius: '2px',
                            transition: 'background 0.3s ease'
                        }}
                    />
                ))}
            </div>

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="audit-step"
                    >
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>1. How many rooms does your property have?</h4>
                        <input
                            type="number"
                            className="audit-input"
                            placeholder="e.g. 50"
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                        />
                        <NeonButton
                            variant="primary"
                            style={{ width: '100%', marginTop: '1.5rem' }}
                            onClick={handleNext}
                            disabled={!rooms}
                        >
                            Next <ArrowRight size={18} />
                        </NeonButton>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="audit-step"
                    >
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>2. What is your Average Daily Rate (ADR)?</h4>
                        <div style={{ position: 'relative' }}>
                            <span style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }}>RM</span>
                            <input
                                type="number"
                                className="audit-input"
                                placeholder="e.g. 250"
                                style={{ paddingLeft: '45px' }}
                                value={adr}
                                onChange={(e) => setAdr(e.target.value)}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <NeonButton variant="outline" onClick={() => setStep(1)}>Back</NeonButton>
                            <NeonButton
                                variant="primary"
                                style={{ flex: 1 }}
                                onClick={handleNext}
                                disabled={!adr}
                            >
                                Next <ArrowRight size={18} />
                            </NeonButton>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="audit-step"
                    >
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'white' }}>3. How many inquiries do you estimate missing per week?</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>(Calls after 6 PM, unread WhatsApps during busy hours, ignored DMs)</p>
                        <input
                            type="number"
                            className="audit-input"
                            placeholder="e.g. 15"
                            value={missedCalls}
                            onChange={(e) => setMissedCalls(e.target.value)}
                        />
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <NeonButton variant="outline" onClick={() => setStep(2)}>Back</NeonButton>
                            <NeonButton
                                variant="primary"
                                style={{ flex: 1 }}
                                onClick={handleNext}
                                disabled={!missedCalls || isCalculating}
                            >
                                {isCalculating ? <RefreshCcw className="spin" size={18} /> : 'Calculate Loss'}
                            </NeonButton>
                        </div>
                    </motion.div>
                )}

                {step === 4 && (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="audit-step text-center"
                    >
                        <TrendingDown size={50} className="text-neon-red mb-4 mx-auto inline-block" />
                        <h4 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>You are losing approximately</h4>
                        <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--color-neon-red)', textShadow: '0 0 20px rgba(255,0,0,0.3)', margin: '1rem 0' }}>
                            {formatCurrency(yearlyLost)}
                        </div>
                        <p style={{ color: 'white', fontSize: '1.1rem', marginBottom: '2rem' }}>every single year to missed inquiries.</p>

                        <div style={{ background: 'rgba(255,0,0,0.1)', border: '1px solid rgba(255,0,0,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '2rem', textAlign: 'left' }}>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                *Based on a conservative 30% conversion rate and 2.5 nights average length of stay.
                            </p>
                        </div>

                        <h4 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Want to capture this revenue?</h4>
                        <NeonButton
                            variant="green"
                            style={{ width: '100%' }}
                            onClick={handleNext}
                        >
                            Get My Recovery Action Plan <ArrowRight size={18} />
                        </NeonButton>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div
                        key="step5"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="audit-step"
                    >
                        <div className="text-center mb-4">
                            <CheckCircle size={40} className="text-neon-green mb-2 mx-auto inline-block" />
                            <h4 style={{ fontSize: '1.2rem', color: 'white', fontWeight: 'bold' }}>Audit Complete</h4>
                            <p style={{ color: 'var(--text-secondary)' }}>Fill out the form below to get your detailed Revenue Recovery Strategy via email.</p>
                        </div>
                        <div style={{ background: 'white', borderRadius: '8px', overflow: 'hidden' }}>
                            <HubSpotLeadForm onFormSubmit={() => console.log('Form submitted!')} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </GlassCard>
    );
};

export default LostRevenueAudit;
