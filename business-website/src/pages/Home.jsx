import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Sparkles, TrendingUp, Shield, Zap, Award, Users,
    CheckCircle, Gift, Clock, Star, ArrowRight, AlertTriangle
} from 'lucide-react';

import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import LostRevenueAudit from '../components/funnel/LostRevenueAudit';
import { TrendingDown } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <PageLayout>
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
                            <span>Hotel Revenue Recovery AI</span>
                        </div>

                        {/* ⚡ Hook */}
                        <h1 className="hero-title" style={{ fontSize: 'min(4rem, 10vw)', lineHeight: 1.2 }}>
                            Stop Losing Bookings When You Are <span className="text-neon-cyan">Asleep</span> or <span className="text-neon-magenta">Busy</span>
                        </h1>

                        <p className="hero-subtitle" style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
                            Every unanswered call or WhatsApp is revenue handed to your competitors. <br />
                            Our <span className="text-gradient">AI Hotel Concierge</span> answers instantly, 24/7, turning inquiries into confirmed bookings.
                        </p>

                        <div className="hero-cta-group">
                            <a href="#revenue-audit" style={{ textDecoration: 'none' }}>
                                <NeonButton variant="primary" size="lg">
                                    Calculate My Lost Revenue <TrendingDown size={20} style={{ marginLeft: '8px' }} />
                                </NeonButton>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 🎯 Funnel Lead Magnet */}
            <section id="revenue-audit" className="section bg-gradient-subtle" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <LostRevenueAudit />
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
                                <h3>Missed Inquiries</h3>
                                <p>Guests abandoning bookings because they waited too long for a reply.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <TrendingUp size={32} />
                                </div>
                                <h3>Overworked Staff</h3>
                                <p>Front desk overwhelmed by repetitive questions instead of serving guests.</p>
                            </GlassCard>
                            <GlassCard variant="magenta" className="problem-card">
                                <div className="card-icon-wrapper magenta">
                                    <Clock size={32} />
                                </div>
                                <h3>Off-Hour Leaks</h3>
                                <p>Losing high-value bookings that come in at 2 AM or during peak check-in.</p>
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
                            Every Unanswered Message is a <span className="text-neon-magenta">Lost Booking</span>
                        </h2>
                        <p className="section-text">
                            Modern guests expect instant replies. If you don't answer their WhatsApp or phone call within 5 minutes, they book with the next hotel on Google.
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
                            Introducing <span className="text-gradient">Nocturn AI</span>
                        </h2>
                        <p className="section-subtitle text-center">
                            Your 24/7 autonomous booking engine and guest concierge.
                        </p>
                        <div className="solution-grid">
                            <GlassCard variant="green" hover className="solution-card">
                                <Zap size={40} className="text-neon-green mb-4" />
                                <h3>Instant Replies 24/7</h3>
                                <p>Answers WhatsApp, Web Chat, and Email in seconds, in over 50 languages.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <TrendingUp size={40} className="text-neon-green mb-4" />
                                <h3>Drives Direct Bookings</h3>
                                <p>Guides guests through the funnel directly to your booking engine, avoiding OTA fees.</p>
                            </GlassCard>
                            <GlassCard variant="green" hover className="solution-card">
                                <Shield size={40} className="text-neon-green mb-4" />
                                <h3>Flawless Knowledge</h3>
                                <p>Trained on your exact policies, menus, and local recommendations. Never makes mistakes.</p>
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
                        <GlassCard variant="gradient" className="offer-card">
                            <h2 className="section-title text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                                Everything You Need to <span className="text-neon-green">Succeed</span>
                            </h2>
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
                                <Link to="/contact">
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
        </PageLayout>
    );
};

export default Home;
