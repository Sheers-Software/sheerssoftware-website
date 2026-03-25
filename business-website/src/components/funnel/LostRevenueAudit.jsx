"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, ArrowRight, TrendingDown, CheckCircle, RefreshCcw } from 'lucide-react';
import NeonButton from '../ui/NeonButton';
import GlassCard from '../ui/GlassCard';
import { HubSpotLeadForm } from './HubSpotLeadForm';
import './LostRevenueAudit.css';

const LostRevenueAudit = () => {
    const [step, setStep] = useState(1);
    const [hotelName, setHotelName] = useState('');
    const [rooms, setRooms] = useState('');
    const [adr, setAdr] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
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
            }, 1800);
        } else {
            setStep(step + 1);
        }
    };

    // Calculation based on Malaysian hotel industry benchmarks:
    // 65% avg occupancy, 20% of occupied room-nights generate inquiries,
    // 35% of inquiries come after 10pm, 30% would convert if answered, 2-night avg stay.
    const monthlyLost = (() => {
        const r = Number(rooms) || 0;
        const d = Number(adr) || 0;
        const occupiedNights = r * 0.65 * 30;
        const inquiries = occupiedNights * 0.20;
        const afterHours = inquiries * 0.35;
        const missedBookings = afterHours * 0.30;
        return missedBookings * d * 2;
    })();

    const weeklyLost = monthlyLost / 4.3;
    const paybackWeeks = weeklyLost > 0 ? Math.ceil(500 / weeklyLost) : null;

    return (
        <GlassCard variant="gradient" hover={false} className="audit-card">
            <div className="audit-header">
                <Calculator size={40} className="text-neon-cyan audit-icon" />
                <h3 className="audit-title">Free After-Hours Revenue Audit</h3>
                <p className="audit-subtitle">Discover exactly how much your hotel is losing overnight.</p>
            </div>

            <div className="audit-progress">
                {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`audit-progress-bar${i <= step ? ' active' : ''}`} />
                ))}
            </div>

            <AnimatePresence mode="wait">

                {/* Step 1 — Hotel Name */}
                {step === 1 && (
                    <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-step">
                        <label className="audit-label">What's your hotel called?</label>
                        <input
                            type="text"
                            className="audit-input"
                            placeholder="e.g. Grand Millenium KL"
                            value={hotelName}
                            onChange={(e) => setHotelName(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && hotelName && handleNext()}
                        />
                        <NeonButton variant="primary" className="audit-btn-full" onClick={handleNext} disabled={!hotelName}>
                            Next <ArrowRight size={18} />
                        </NeonButton>
                    </motion.div>
                )}

                {/* Step 2 — Room Count */}
                {step === 2 && (
                    <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-step">
                        <label className="audit-label">How many rooms does {hotelName} have?</label>
                        <input
                            type="number"
                            className="audit-input"
                            placeholder="e.g. 50"
                            value={rooms}
                            onChange={(e) => setRooms(e.target.value)}
                            min="1"
                            onKeyDown={(e) => e.key === 'Enter' && rooms && handleNext()}
                        />
                        <div className="audit-btn-row">
                            <NeonButton variant="secondary" onClick={() => setStep(1)}>Back</NeonButton>
                            <NeonButton variant="primary" className="audit-btn-flex" onClick={handleNext} disabled={!rooms}>
                                Next <ArrowRight size={18} />
                            </NeonButton>
                        </div>
                    </motion.div>
                )}

                {/* Step 3 — ADR */}
                {step === 3 && (
                    <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="audit-step">
                        <label className="audit-label">What is your Average Daily Rate?</label>
                        <p className="audit-hint">The average price you charge per room per night.</p>
                        <div className="audit-input-prefix">
                            <span className="audit-prefix">RM</span>
                            <input
                                type="number"
                                className="audit-input"
                                placeholder="e.g. 250"
                                value={adr}
                                onChange={(e) => setAdr(e.target.value)}
                                min="1"
                                onKeyDown={(e) => e.key === 'Enter' && adr && !isCalculating && handleNext()}
                            />
                        </div>
                        <div className="audit-btn-row">
                            <NeonButton variant="secondary" onClick={() => setStep(2)}>Back</NeonButton>
                            <NeonButton variant="primary" className="audit-btn-flex" onClick={handleNext} disabled={!adr || isCalculating}>
                                {isCalculating
                                    ? <><RefreshCcw className="spin" size={18} /> Calculating…</>
                                    : <><Calculator size={18} /> Calculate Loss</>
                                }
                            </NeonButton>
                        </div>
                    </motion.div>
                )}

                {/* Step 4 — Results + What happens next */}
                {step === 4 && (
                    <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="audit-step audit-result">
                        <p className="audit-result-label">{hotelName} is losing approximately</p>
                        <div className="audit-result-amount">{formatCurrency(monthlyLost)}</div>
                        <p className="audit-result-period">every month to missed after-hours inquiries</p>

                        {paybackWeeks !== null && (
                            <div className="audit-payback-badge">
                                <CheckCircle size={15} />
                                Nocturn AI pays for itself in Week {paybackWeeks}
                            </div>
                        )}

                        <div className="audit-process">
                            <p className="audit-process-title">What happens next</p>
                            <div className="audit-process-steps">
                                <div className="audit-process-item">
                                    <span className="audit-process-num">1</span>
                                    <span>We set up a 7-day monitoring window on your hotel's after-hours inquiry channels</span>
                                </div>
                                <div className="audit-process-item">
                                    <span className="audit-process-num">2</span>
                                    <span>Our system tracks every inquiry your hotel receives after 10pm</span>
                                </div>
                                <div className="audit-process-item">
                                    <span className="audit-process-num">3</span>
                                    <span>You receive a detailed PDF: exact inquiry count, revenue lost, and your personalised recovery plan</span>
                                </div>
                            </div>
                        </div>

                        <p className="audit-disclaimer">
                            * Estimate based on Malaysian hotel benchmarks: 65% avg occupancy, 35% after-hours inquiry rate, 30% conversion rate, 2-night avg stay.
                        </p>

                        <NeonButton variant="primary" className="audit-btn-full" onClick={handleNext}>
                            Get My Free Revenue Report <ArrowRight size={18} />
                        </NeonButton>
                    </motion.div>
                )}

                {/* Step 5 — Contact capture */}
                {step === 5 && (
                    <motion.div key="step5" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="audit-step">
                        <div className="audit-contact-header">
                            <CheckCircle size={40} className="text-neon-green audit-icon" />
                            <h4 className="audit-contact-title">Almost there</h4>
                            <p className="audit-contact-subtitle">
                                Enter your details and we'll send {hotelName}'s personalised revenue report directly to your inbox — no commitment required.
                            </p>
                        </div>
                        <div className="audit-hubspot-wrapper">
                            <HubSpotLeadForm onFormSubmit={() => console.log('Form submitted!')} />
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </GlassCard>
    );
};

export default LostRevenueAudit;
