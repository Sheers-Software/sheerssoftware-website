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
                            <span>Professional Digital Solutions</span>
                        </div>

                        {/* ⚡ Hook */}
                        <h1 className="hero-title">
                            Transform Your Business with <span className="text-gradient">SheersSoft</span>
                        </h1>

                        <p className="hero-subtitle">
                            Stop losing time and money on manual processes. <br />
                            Let <span className="text-neon-cyan">intelligent automation</span> work for you.
                        </p>

                        <div className="hero-cta-group">
                            <Link href="/contact">
                                <NeonButton variant="primary" size="lg">
                                    Start Transformation <ArrowRight size={20} />
                                </NeonButton>
                            </Link>
                            <Link href="/solutions">
                                <NeonButton variant="secondary" size="lg">
                                    View Solutions
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
                            Are You Struggling With These <span className="text-neon-magenta">Problems</span>?
                        </h2>
                        <div className="problems-grid">
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <AlertTriangle size={32} />
                                </div>
                                <h3>Wasting Time</h3>
                                <p>Your team spends hours on repetitive manual tasks instead of high-value work.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <TrendingUp size={32} />
                                </div>
                                <h3>High Costs</h3>
                                <p>Operational expenses keep climbing every month while efficiency stagnates.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <Clock size={32} />
                                </div>
                                <h3>Slow Growth</h3>
                                <p>Your business isn't scaling as fast as you'd like due to bottlenecks.</p>
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
                            Every Day You Wait, You're <span className="text-neon-magenta">Losing Money</span>
                        </h2>
                        <p className="section-text">
                            While your competitors automate and scale, you're stuck with outdated processes.
                            Your team is overworked, customers are waiting, and opportunities are slipping away.
                        </p>
                        <p className="section-text-highlight">
                            How much longer can you afford to wait?
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 💡 Solution */}
            <section className="section bg-gradient-cyan">
                <div className="container">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <h2 className="section-title text-center">
                            Introducing <span className="text-gradient">SheersSoft Solutions</span>
                        </h2>
                        <p className="section-subtitle text-center">
                            The all-in-one platform that automates your business operations
                        </p>
                        <div className="solution-grid">
                            <GlassCard variant="green" hover className="solution-card">
                                <Zap size={40} className="text-neon-green mb-4" />
                                <h3>AI-Powered Automation</h3>
                                <p>Automate repetitive tasks and free up your team's time for what matters.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <Shield size={40} className="text-neon-green mb-4" />
                                <h3>Secure & Reliable</h3>
                                <p>Enterprise-grade security you can trust with your most sensitive data.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <TrendingUp size={40} className="text-neon-green mb-4" />
                                <h3>Scalable Growth</h3>
                                <p>Grows with your business from startup to enterprise without friction.</p>
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
                            Transform Your Business <span className="text-gradient">Today</span>
                        </h2>
                        <div className="benefits-grid">
                            <GlassCard variant="cyan" hover className="benefit-card">
                                <div className="benefit-icon">🚀</div>
                                <h3>10x Faster Operations</h3>
                                <p>Complete tasks in minutes that used to take hours. Our automation handles the heavy lifting.</p>
                            </GlassCard>

                            <GlassCard variant="green" hover className="benefit-card">
                                <div className="benefit-icon">🌍</div>
                                <h3>Scale Globally</h3>
                                <p>Expand to new markets without hiring more staff. Our platform scales with you.</p>
                            </GlassCard>

                            <GlassCard variant="magenta" hover className="benefit-card">
                                <div className="benefit-icon">💎</div>
                                <h3>Premium Support</h3>
                                <p>Get dedicated support from our expert team. We're here 24/7 to help you succeed.</p>
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
                            Everything You Need to <span className="text-neon-green">Succeed</span>
                        </h2>
                        <GlassCard variant="gradient" className="offer-card">
                            <div className="offer-header">
                                <Gift size={60} className="text-neon-cyan mb-4" />
                                <h3>Complete Package</h3>
                            </div>
                            <div className="offer-list">
                                {[
                                    'Full Platform Access',
                                    'AI-Powered Automation Tools',
                                    'Priority Customer Support',
                                    'Monthly Strategy Sessions',
                                    'Custom Integration Support',
                                    'Training & Onboarding',
                                    'Regular Updates & Features',
                                    '99.9% Uptime Guarantee'
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
                            <h2>Limited Time Offer: Get Started Today</h2>
                            <p className="urgency-text">⚡ Only 5 Spots Available This Month</p>
                            <p className="cta-subtitle">Join the businesses already transforming their operations</p>
                            <div className="cta-buttons">
                                <Link href="/contact">
                                    <NeonButton variant="primary" size="lg">
                                        Get Free Consultation
                                    </NeonButton>
                                </Link>
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
                            <h3>100% Satisfaction Guarantee</h3>
                            <p>
                                We're so confident in our solutions that if you're not completely satisfied within the first 30 days,
                                we'll refund every penny. <strong className="text-neon-green">No questions asked.</strong>
                            </p>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
        </>
    );
};

export default Home;
