"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe, Zap, Clock, Shield, ArrowRight, CheckCircle, Star, MessageCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';

const WebDesignPage = () => {
    const features = [
        { icon: <Globe size={32} />, title: 'Responsive Design', desc: 'Pixel-perfect on every device — mobile, tablet, desktop. Your site adapts seamlessly.' },
        { icon: <Zap size={32} />, title: 'Lightning Fast', desc: 'Optimised for speed with 90+ Lighthouse scores. Fast sites rank higher and convert better.' },
        { icon: <Clock size={32} />, title: 'Built in 7 Days', desc: 'From brief to launch in one week. No months of waiting, no scope creep.' },
        { icon: <Shield size={32} />, title: 'SEO-Ready', desc: 'Built with schema markup, semantic HTML, and meta tags that get you found on Google.' },
    ];

    const industries = [
        'Restaurants & F&B', 'Hotels & Hospitality', 'Real Estate', 'Professional Services',
        'Retail & E-commerce', 'Health & Wellness', 'Education'
    ];

    return (
        <div style={{ padding: 'var(--space-2xl) 0' }}>
            {/* Hero */}
            <section style={{ textAlign: 'center', padding: 'var(--space-2xl) var(--space-lg)', maxWidth: '900px', margin: '0 auto' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: 'var(--space-md)', lineHeight: 1.2 }}>
                        Professional Website for Your KL Business
                        <span style={{ display: 'block', color: 'var(--neon-cyan)' }}>— Built in 7 Days</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto var(--space-lg)' }}>
                        No templates. No page builders. A custom-designed, high-performance website that makes your business look as professional as it is.
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact">
                            <NeonButton onClick={() => { }} size="lg">
                                Get a Free Quote <ArrowRight size={18} />
                            </NeonButton>
                        </Link>
                        <Link href="/portfolio">
                            <NeonButton onClick={() => { }} variant="secondary" size="lg">
                                See Our Work
                            </NeonButton>
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Features */}
            <section style={{ padding: 'var(--space-2xl) var(--space-lg)', maxWidth: '1100px', margin: '0 auto' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: 'var(--space-xl)' }}>
                    What You Get
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-lg)' }}>
                    {features.map((f, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, duration: 0.5 }}>
                            <GlassCard>
                                <div style={{ padding: 'var(--space-lg)', textAlign: 'center' }}>
                                    <div style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-sm)' }}>{f.icon}</div>
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>{f.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{f.desc}</p>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Industries */}
            <section style={{ padding: 'var(--space-2xl) var(--space-lg)', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)' }}>
                    Built for KL Businesses Across 7 Industries
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-sm)', justifyContent: 'center' }}>
                    {industries.map((ind, i) => (
                        <span key={i} style={{
                            padding: '8px 18px',
                            background: 'rgba(0,255,255,0.08)',
                            border: '1px solid rgba(0,255,255,0.2)',
                            borderRadius: '20px',
                            color: 'var(--neon-cyan)',
                            fontSize: '0.9rem',
                            fontWeight: '500'
                        }}>
                            {ind}
                        </span>
                    ))}
                </div>
            </section>

            {/* Pricing CTA */}
            <section style={{ padding: 'var(--space-2xl) var(--space-lg)', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                <GlassCard>
                    <div style={{ padding: 'var(--space-xl)' }}>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-md)' }}>
                            Starting from <span style={{ color: 'var(--neon-cyan)' }}>RM 2,500</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                            {['Custom design — no templates', '7-day turnaround', 'SEO-optimised from day one', '30-day post-launch support', 'Hosting setup included'].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                                    <CheckCircle size={16} style={{ color: 'var(--neon-green)' }} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/contact">
                            <NeonButton onClick={() => { }} size="lg">
                                Get Started <MessageCircle size={18} />
                            </NeonButton>
                        </Link>
                    </div>
                </GlassCard>
            </section>

            {/* Portfolio Link */}
            <section style={{ padding: 'var(--space-xl) var(--space-lg)', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                    Want to see what we&apos;ve built?
                </p>
                <Link href="/portfolio" style={{ color: 'var(--neon-cyan)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    View Our Portfolio <ArrowRight size={16} />
                </Link>
            </section>
        </div>
    );
};

export default WebDesignPage;
