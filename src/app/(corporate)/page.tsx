"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Sparkles, TrendingUp, Shield, Zap, Award, Users,
    CheckCircle, Gift, Clock, Star, ArrowRight, AlertTriangle
} from 'lucide-react';

import GlassCard from '@/components/corporate/GlassCard';
import NeonButton from '@/components/corporate/NeonButton';

const Home = () => {
    return (
        <>
            {/* 🟣 Headline */}
            <section className="hero-section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-content"
                    >
                        <div className="hero-badge">
                            <Sparkles size={16} />
                            <span>AI Automation for Malaysian SMEs</span>
                        </div>

                        {/* ⚡ Hook */}
                        <h1 className="hero-title">
                            Malaysian SMEs Are Losing RM2,000–8,000 a Month to Manual Work. <span className="text-gradient">We Build the AI Systems That Stop It.</span>
                        </h1>

                        <p className="hero-subtitle">
                            Sheers Software builds custom AI automation for Malaysian businesses — deployed in 3 weeks, priced for SMEs, and eligible for up to RM5,000 in government grants.
                        </p>

                        <div className="hero-cta-group">
                            <a href="https://cal.com/ahmadbasyir/discovery" target="_blank" rel="noopener noreferrer">
                                <NeonButton variant="primary" size="lg">
                                    See If You Qualify <ArrowRight size={20} />
                                </NeonButton>
                            </a>
                            <Link href="/solutions">
                                <NeonButton variant="secondary" size="lg">
                                    How It Works
                                </NeonButton>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ❗ Problem */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            The Real Cost of Running Your Business <span className="text-neon-magenta">Manually in 2026</span>
                        </h2>
                        <div className="problems-grid">
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <AlertTriangle size={32} />
                                </div>
                                <h3>Your Team Is Doing RM15/Hour Work</h3>
                                <p>WhatsApp bookings, manual invoices, Excel trackers. That&apos;s not what you hired them for — and every hour they spend on it costs more than the software that eliminates it.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <TrendingUp size={32} />
                                </div>
                                <h3>Digital Agencies Want 6 Months and RM50,000</h3>
                                <p>By the time a traditional agency delivers, the market has moved. You don&apos;t need a 6-month project. You need a working system in 3 weeks.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <Clock size={32} />
                                </div>
                                <h3>97% of Malaysian SMEs Aren&apos;t Digitally Mature — Yet</h3>
                                <p>The businesses automating their operations now are cutting costs, responding faster, and closing more. The first-mover window in your market is 12–18 months. It is open right now.</p>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 💢 Agitate */}
            <section className="section bg-gradient-magenta">
                <div className="container-sm">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="section-title">
                            The Window for First-Mover Advantage in Your Market Is <span className="text-neon-magenta">12–18 Months.</span>
                        </h2>
                        <p className="section-text">
                            AI adoption in Malaysian SMEs is accelerating. The businesses automating their operations now are cutting costs, responding faster, and closing more — while their competitors still manage everything on WhatsApp and Excel.
                        </p>
                        <p className="section-text-highlight">
                            We&apos;re not selling you a feature. We&apos;re selling you a head start.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 💡 Solution */}
            <section className="section bg-gradient-cyan">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            <span className="text-gradient">What We Build</span>
                        </h2>
                        <p className="section-subtitle text-center">
                            Three specific offerings. Each built for Malaysian SMEs. Each deployable in under 3 weeks.
                        </p>
                        <div className="solution-grid">
                            <GlassCard variant="green" hover className="solution-card">
                                <Zap size={40} className="text-neon-green mb-4" />
                                <h3>AI Operations Sprint</h3>
                                <p>We map your single biggest manual process, build the AI system to eliminate it, and deploy it live — in 21 days or less. Bookings, invoicing, customer follow-up, staff tracking. If it&apos;s manual, we can automate it. Most clients qualify for a RM5,000 government grant that offsets the cost.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <Shield size={40} className="text-neon-green mb-4" />
                                <h3>AI WhatsApp Concierge (Nocturn AI)</h3>
                                <p>Captures every customer inquiry, qualifies every lead, and responds 24/7 — even when you&apos;re closed. Built specifically for F&amp;B chains, clinics, and property agencies. Never miss a booking again.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <TrendingUp size={40} className="text-neon-green mb-4" />
                                <h3>MSME Digital Grant Navigation</h3>
                                <p>Budget 2026 includes up to RM5,000 in matching grants for SME digitalisation via BSN and MDEC. Most SME owners have no idea this exists. We identify if you qualify, help you apply, and offset the cost of your system. You&apos;re effectively getting the build at half price.</p>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 🚀 Benefits */}
            <section className="section bg-gradient-subtle">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            Why Malaysian SMEs <span className="text-gradient">Choose Us</span>
                        </h2>
                        <div className="benefits-grid">
                            <GlassCard variant="cyan" hover className="benefit-card">
                                <h3>21 Days</h3>
                                <p>From discovery call to live deployed system. Not 6 months. Not a pilot. A working AI system in your business in 3 weeks.</p>
                            </GlassCard>

                            <GlassCard variant="green" hover className="benefit-card">
                                <h3>RM5,000</h3>
                                <p>In government digitalisation grants available to qualifying Malaysian SMEs under Budget 2026. We handle the paperwork. You keep the savings.</p>
                            </GlassCard>

                            <GlassCard variant="magenta" hover className="benefit-card">
                                <h3>ROI Brief First</h3>
                                <p>Before you pay a single ringgit, we give you a 1-page brief showing exactly what the system will save you — in RM, per month. If the numbers don&apos;t make sense, we say so.</p>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 🎁 Offer Stack */}
            <section className="section">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            <span className="text-neon-green">How We Work</span>
                        </h2>
                        <GlassCard variant="gradient" className="offer-card">
                            <div className="offer-header">
                                <Gift size={60} className="text-neon-cyan mb-4" />
                                <h3>The AI Operations Sprint</h3>
                            </div>
                            <div className="offer-list">
                                {[
                                    'One fixed-scope project. One outcome. Zero ambiguity.',
                                    '30-min discovery call to identify your highest-value automation',
                                    '1-page ROI brief delivered before any commitment',
                                    'Custom AI system built and deployed on GCP in 21 days',
                                    'Integrates with WhatsApp, Google Sheets, and email you already use',
                                    'Staff training doc and walkthrough included',
                                    '30 days of async WhatsApp support post-launch',
                                    'MSME Digital Grant application assistance (up to RM5,000 back)'
                                ].map((item, index) => (
                                    <div key={index} className="offer-item">
                                        <CheckCircle size={24} className="text-neon-green shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* 🔔 CTA + Urgency */}
            <section className="cta-section">
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <GlassCard variant="gradient" className="cta-card">
                            <Clock size={50} className="text-neon-magenta mb-4 inline-block" />
                            <h2>We Take On 3 New Clients Per Month.</h2>
                            <p className="urgency-text">Our process starts with a 20-minute discovery call — no commitment, no sales pitch.</p>
                            <p className="cta-subtitle">We learn your operation, identify the highest-value automation opportunity, and show you the ROI — before you spend anything. If it&apos;s not a clear win for your business, we&apos;ll tell you.</p>
                            <div className="cta-buttons">
                                <a href="https://cal.com/ahmadbasyir/discovery" target="_blank" rel="noopener noreferrer">
                                    <NeonButton variant="primary" size="lg">
                                        Book a Free Discovery Call
                                    </NeonButton>
                                </a>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* 💬 Guarantee */}
            <section className="section">
                <div className="container-sm">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <GlassCard variant="green" className="guarantee-card">
                            <Shield size={60} className="text-neon-green mb-4 inline-block" />
                            <h3>ROI Brief Guarantee</h3>
                            <p>
                                Every engagement starts with a free ROI brief. We show you exactly what the system will save you — in ringgit — before you commit. If the numbers don&apos;t make sense for your business, you walk away and owe us nothing.
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
