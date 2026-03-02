"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LifeBuoy, Mail, MessageSquare, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';


const Support = () => {
    return (
                    <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <h1 className="page-title">
                            Help & <span className="text-gradient">Support</span>
                        </h1>
                        <p className="page-subtitle">
                            We're here to help. Choose a channel below to get in touch with our team.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {/* Ticket Support */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <GlassCard variant="magenta" hover style={{ padding: 'var(--space-xl)', textAlign: 'center', height: '100%' }}>
                                <LifeBuoy size={48} className="text-neon-magenta mb-4 inline-block" />
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>Submit a Ticket</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                    For technical issues and bug reports. Our team will respond within 24 hours.
                                </p>
                                <NeonButton variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    Open Ticket
                                </NeonButton>
                            </GlassCard>
                        </motion.div>

                        {/* Email Support */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <GlassCard variant="cyan" hover style={{ padding: 'var(--space-xl)', textAlign: 'center', height: '100%' }}>
                                <Mail size={48} className="text-neon-cyan mb-4 inline-block" />
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>Email Us</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                    For general inquiries, billing questions, and partnership opportunities.
                                </p>
                                <a href="mailto:a.basyir@sheerssoft.com" style={{ width: '100%' }}>
                                    <NeonButton variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                                        a.basyir@sheerssoft.com
                                    </NeonButton>
                                </a>
                            </GlassCard>
                        </motion.div>

                        {/* Knowledge Base */}
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <GlassCard variant="green" hover style={{ padding: 'var(--space-xl)', textAlign: 'center', height: '100%' }}>
                                <FileText size={48} className="text-neon-green mb-4 inline-block" />
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>Knowledge Base</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                    Browse our guides, tutorials, and FAQs to find instant answers.
                                </p>
                                <Link href="/faq" style={{ width: '100%' }}>
                                    <NeonButton variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                                        View Documentation
                                    </NeonButton>
                                </Link>
                            </GlassCard>
                        </motion.div>
                    </div>

                    {/* SLA Section */}
                    <div style={{ marginTop: 'var(--space-3xl)' }}>
                        <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)' }}>
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>Our Support Commitment</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-xl)' }}>
                                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={24} className="text-neon-green shrink-0" />
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', marginBottom: '4px' }}>24/7 Monitoring</h4>
                                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>We monitor your systems around the clock to ensure uptime.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={24} className="text-neon-green shrink-0" />
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Fast Response</h4>
                                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>Priority tickets are answered within 2 hours.</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                                    <CheckCircle size={24} className="text-neon-green shrink-0" />
                                    <div>
                                        <h4 style={{ fontWeight: 'bold', marginBottom: '4px' }}>Expert Team</h4>
                                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>Direct access to the engineers who built your system.</p>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </section>
    );
};

export default Support;
