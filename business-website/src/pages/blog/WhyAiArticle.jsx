import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, Phone, TrendingUp, Users, AlertTriangle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/layout/PageLayout';
import GlassCard from '../../components/ui/GlassCard';
import '../Pages.css';
import './Blog.css';

// Import generated image. Replace with appropriate path later if needed.
// Note: We'll just define the path directly or assume it's moved to public.
// Using inline styling or direct img tags.

const WhyAiArticle = () => {
    return (
        <PageLayout>
            <section className="section article-section" style={{ padding: '6rem 0' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    {/* Header */}
                    <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--neon-cyan)', textDecoration: 'none', marginBottom: '2rem', fontWeight: 'bold' }}>
                        <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} /> Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="article-header"
                        style={{ marginBottom: '4rem' }}
                    >
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                            <span style={{ background: 'rgba(0, 255, 255, 0.1)', color: 'var(--color-neon-cyan)', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>Hospitality Tech</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> Oct 24, 2024</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> 7 min read</span>
                        </div>
                        <h1 className="page-title" style={{ fontSize: '3rem', textAlign: 'left', lineHeight: 1.2, marginBottom: '2rem' }}>
                            The Hidden Cost of Missed Calls: <span className="text-gradient">Why AI is the Future of Hotel Revenue</span>
                        </h1>
                        <p style={{ fontSize: '1.3rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            A data-driven feasibility study on how conversational AI agents for hotel call centers lock in uncaptured revenue and drastically reduce operational overhead.
                        </p>
                    </motion.div>

                    <div className="article-body" style={{ color: 'white', fontSize: '1.15rem', lineHeight: 1.8 }}>

                        <p style={{ marginBottom: '2rem' }}>
                            The hospitality industry is evolving rapidly, but one critical touchpoint remains stubbornly analogue: the telephone. While direct online booking engines have revolutionized guest acquisition, ignoring the voice channel is a costly mistake. Below, we break down the evidence and numbers behind why hotels desperately need AI to manage their inquiries.
                        </p>

                        <GlassCard variant="green" style={{ padding: '2rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <Phone size={28} className="text-neon-green" />
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>1. Phone Bookings Remain a Massive Revenue Channel</h2>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Despite the digital push, industry data continues to highlight the value of direct voice channels. A study by Revinate revealed that in cases like the Dream Inn, <strong>40% of their bookings were completed by phone</strong>. Direct voice channels consistently perform better in conversion quality compared to many digital channels because the intent is significantly higher.
                            </p>
                        </GlassCard>

                        <GlassCard variant="cyan" style={{ padding: '2rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <TrendingUp size={28} className="text-neon-cyan" />
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>2. Phone Calls Generate 6x More Revenue</h2>
                            </div>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Not only do guests book over the phone, but they also spend more. According to Simplotel, phone calls originating from hotel websites generated <strong>up to 6× more revenue</strong> than the booking engine alone. This staggering multiplier means every missed call is an exponentially higher loss than an abandoned web session.
                            </p>
                        </GlassCard>

                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '3rem 0 1.5rem', color: 'white' }}>The Operational Burden</h2>

                        <p style={{ marginBottom: '2rem' }}>
                            Handling this high-value channel comes with enormous operational costs. The Average Handle Time (AHT) in contact centers usually hovers around 4–6 minutes per call. This directly drives up staffing requirements, queue times, and the ultimate cost per contact.
                        </p>

                        {/* Upselling Section with Image */}
                        <div style={{ margin: '3rem 0' }}>
                            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>Automating the Upsell</h2>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                style={{ marginBottom: '2rem', overflow: 'hidden', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}
                            >
                                <img src="/hotel_upsell_revenue.png" alt="Hotel Upselling AI" style={{ width: '100%', height: 'auto', display: 'block' }} />
                            </motion.div>
                            <p style={{ marginBottom: '2rem' }}>
                                AI agents don't just answer questions; they are mathematically perfect at the upsell. Industry benchmarks indicate that structured upselling can contribute <strong>1.5% to 6% of additional revenue</strong>. Human agents, especially when fatigued or overwhelmed, often forget to offer upgrades. AI never misses a chance.
                            </p>
                        </div>

                        <GlassCard variant="red" style={{ padding: '2rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <AlertTriangle size={28} className="text-neon-red" />
                                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: 0 }}>The True Cost of Errors and Turnover</h2>
                            </div>
                            <ul style={{ paddingLeft: '20px', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Inconsistencies:</strong> Manual data entry errors, misquotes, and double bookings lead to direct revenue loss and guest dissatisfaction.</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Training Overhead:</strong> Hospitality suffers from one of the highest turnover rates (around 86%). This drives constant training costs and creates endless knowledge retention issues.</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                An AI agent eliminates these issues instantly. It never forgets a policy, never double-books a room, and requires zero retraining when staff leaves.
                            </p>
                        </GlassCard>

                        <hr style={{ border: 0, height: '1px', background: 'rgba(255,255,255,0.1)', margin: '4rem 0' }} />

                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                <BookOpen size={24} className="text-white" />
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0, color: 'white' }}>Sources & Methodology</h3>
                            </div>
                            <ul style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', paddingLeft: '20px' }}>
                                <li>Revinate – Hotel Voice Performance Study (Dream Inn case).</li>
                                <li>Simplotel – "Calls Can Generate Up to 6x More Revenue Than Bookings Engines".</li>
                                <li>Sobot – Contact Center Benchmarks Report (AHT ranges).</li>
                                <li>Hotel Upsell Program Benchmark Guides (Industry accepted revenue impacts).</li>
                                <li>Centrical – Hospitality Turnover Insights (~86% sector turnover).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default WhyAiArticle;
