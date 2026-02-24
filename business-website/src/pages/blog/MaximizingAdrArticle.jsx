import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, PlusCircle, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import GlassCard from '../../components/ui/GlassCard';
import '../Pages.css';
import './Blog.css';

const MaximizingAdrArticle = () => {
    return (
        <PageLayout>
            <section className="section article-section" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* Header */}
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--neon-cyan)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
                        <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="article-header"
                        style={{ marginBottom: '4rem' }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                            <span className="text-neon-cyan" style={{ fontWeight: 'bold' }}>Revenue Strategy</span>
                            <span>•</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={16} /> Oct 28, 2024</span>
                            <span>•</span>
                            <span>6 min read</span>
                        </div>

                        <h1 className="article-title text-gradient" style={{ fontSize: '3rem', lineHeight: 1.2, marginBottom: '2rem' }}>
                            Maximizing ADR: How AI Concierges are Driving Up Ancillary Revenue
                        </h1>

                        <p className="article-lead" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Discover how automated upselling strategies at check-in and during the guest stay can seamlessly increase your Average Daily Rate without lifting a finger.
                        </p>
                    </motion.div>

                    {/* Featured Image placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ marginBottom: '4rem', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <img
                            src="/hotel_upsell_revenue.png"
                            alt="Data visualization showing increased ADR through AI upselling"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </motion.div>

                    {/* Content */}
                    <div className="article-body" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-primary)' }}>
                        <p style={{ marginBottom: '2rem' }}>
                            For years, hoteliers have focused on maximizing occupancy as the primary driver of revenue. However, with occupancy rates plateauing in highly competitive markets, the focus has drastically shifted to maximizing the <strong>Average Daily Rate (ADR)</strong> through ancillary spending and upselling.
                        </p>

                        <h2 style={{ fontSize: '2rem', color: 'white', marginTop: '3rem', marginBottom: '1.5rem' }}>The Friction of the Front Desk</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Traditional upselling happens at the front desk. A weary traveler arrives after a long flight, and the receptionist attempts to pitch a room upgrade, late checkout, or a spa package. The conversion rates are notoriously low, and the process often creates friction for a guest who simply wants to get to their room.
                        </p>

                        <GlassCard variant="magenta" style={{ margin: '3rem 0', padding: '2rem' }}>
                            <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white', marginBottom: '1rem' }}>
                                <TrendingUp className="text-neon-magenta" size={28} /> The Solution: Pre-Arrival Automation
                            </h3>
                            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                                What if the upgrade offer happens when the guest is most receptive? AI concierges engage guests via WhatsApp or SMS prior to arrival, offering hyper-personalized upgrades without the pressure of a face-to-face interaction.
                            </p>
                        </GlassCard>

                        <h2 style={{ fontSize: '2rem', color: 'white', marginTop: '3rem', marginBottom: '1.5rem' }}>Automating the Upsell Journey</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            A conversational AI agent, like Nocturn AI, integrates directly with your PMS. Two days before a guest arrives, the AI notes that there are premium suites available. It autonomously sends a personalized message:
                        </p>

                        <blockquote style={{ borderLeft: '4px solid var(--neon-cyan)', paddingLeft: '1.5rem', margin: '2rem 0', fontStyle: 'italic', color: 'var(--text-secondary)' }}>
                            "Hi Sarah! We are excited to welcome you to the Grand Hotel on Friday. We noticed you booked a Standard Queen. Would you like to upgrade to our Ocean View King Suite for just $45/night? Reply 'Yes' to secure this upgrade instantly."
                        </blockquote>

                        <p style={{ marginBottom: '2rem' }}>
                            Because this interaction is purely conversational and happens on the guest's preferred channel, conversion rates spike by up to 300% compared to front-desk pitches.
                        </p>

                        <h3 style={{ fontSize: '1.5rem', color: 'white', marginTop: '2.5rem', marginBottom: '1rem' }}>Key Ancillary Revenue Streams</h3>
                        <ul style={{ listStyle: 'none', padding: 0, marginBottom: '3rem' }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                                <PlusCircle className="text-neon-cyan" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                                <div>
                                    <strong style={{ color: 'white' }}>Room Upgrades:</strong> The most direct path to higher ADR. AI identifies unsold premium inventory and matches it to incoming guests automatically.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                                <PlusCircle className="text-neon-cyan" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                                <div>
                                    <strong style={{ color: 'white' }}>Early Check-in / Late Checkout:</strong> Monetizing time. AI manages early arrival requests seamlessly, charging a nominal fee without human intervention.
                                </div>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '1rem' }}>
                                <PlusCircle className="text-neon-cyan" size={24} style={{ flexShrink: 0, marginTop: '4px' }} />
                                <div>
                                    <strong style={{ color: 'white' }}>Dining & Spa Bookings:</strong> Intercepting guests during their stay with timely offers (e.g., "It's raining outside, would you like to book a 60-min massage at the spa?").
                                </div>
                            </li>
                        </ul>

                        <h2 style={{ fontSize: '2rem', color: 'white', marginTop: '3rem', marginBottom: '1.5rem' }}>Conclusion</h2>
                        <p style={{ marginBottom: '2rem' }}>
                            Every unsold upgrade or empty spa appointment is perishable inventory. An AI Hotel Concierge ensures that you leave no money on the table, driving up ADR effortlessly while simultaneously enhancing the guest experience through personalized, conversational service.
                        </p>

                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default MaximizingAdrArticle;
