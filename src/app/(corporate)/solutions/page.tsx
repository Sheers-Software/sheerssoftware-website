"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Cpu, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/corporate/GlassCard';
import NeonButton from '@/components/corporate/NeonButton';

const Solutions = () => {
    const solutions = [
        {
            icon: Globe,
            title: 'AI Operations Sprint',
            desc: 'We map your single biggest manual workflow — bookings, invoicing, customer follow-up, staff scheduling — and build a live AI system to eliminate it. Deployed on GCP. Integrated with WhatsApp, Google Sheets, and email. Live in 21 days.',
            features: [
                '30-min discovery call + free ROI brief',
                'Custom AI system built and deployed',
                'WhatsApp / Google Sheets / email integration',
                '30 days post-launch support'
            ]
        },
        {
            icon: Code,
            title: 'AI WhatsApp Concierge — Nocturn AI',
            desc: 'An always-on AI agent that handles customer inquiries, qualifies leads, and books appointments via WhatsApp — even outside business hours. Built for F&B chains, clinics, dental practices, and property agencies.',
            features: [
                '24/7 WhatsApp auto-response',
                'Lead qualification and intake',
                'Appointment booking automation',
                'Missed inquiry recovery'
            ]
        },
        {
            icon: Cpu,
            title: 'MSME Digital Grant Navigation',
            desc: 'Budget 2026 allocates up to RM5,000 in matching grants for SME digitalisation through BSN and MDEC. Most SME owners don\'t know this exists. We identify your eligibility, prepare the application, and help you claim the grant — effectively halving the cost of your AI system.',
            features: [
                'Eligibility assessment (free)',
                'Grant application preparation',
                'Up to RM5,000 reimbursement',
                'BSN / MDEC compliant documentation'
            ]
        }
    ];

    return (
        <section className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="page-hero text-center"
                >
                    <h1 className="page-title">
                        What We Build for <span className="text-gradient">Malaysian SMEs</span>
                    </h1>
                    <p className="page-subtitle">
                        Three specific offerings. Each deployed in under 3 weeks. Each built for the operational reality of Malaysian businesses — not enterprise spec sheets.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)' }}>
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ display: 'flex' }}
                        >
                            <GlassCard variant="cyan" hover style={{ padding: 'var(--space-xl)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ flexGrow: 1 }}>
                                    <solution.icon size={50} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)' }} />
                                    <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{solution.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>{solution.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                                        {solution.features.map((feature, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                                <div style={{ background: 'rgba(0, 255, 255, 0.1)', borderRadius: '50%', padding: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Check size={14} style={{ color: 'var(--neon-cyan)' }} />
                                                </div>
                                                <span style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Link href="/contact" style={{ width: '100%' }}>
                                    <NeonButton variant="secondary" style={{ width: '100%' }}>
                                        <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%' }}>
                                            Learn More <ArrowRight size={16} />
                                        </span>
                                    </NeonButton>
                                </Link>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center' }}>
                    <GlassCard variant="magenta" style={{ padding: 'var(--space-3xl)', maxWidth: '900px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', marginBottom: 'var(--space-md)' }}>
                            Not Sure Which Option Fits? Start With a Free Discovery Call.
                        </h2>
                        <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                            We'll map your operation, identify the highest-ROI automation, and deliver a written brief before you commit to anything.
                        </p>
                        <a href="https://cal.com/ahmadbasyir/discovery" target="_blank" rel="noopener noreferrer">
                            <NeonButton variant="primary" size="lg">
                                Book Your Free Discovery Call
                            </NeonButton>
                        </a>
                    </GlassCard>
                </div>
            </div>
        </section>
    );
};

export default Solutions;
