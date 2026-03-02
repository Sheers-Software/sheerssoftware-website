"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';


const Contact = () => {
    return (
                    <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <h1 className="page-title">
                            Get in <span className="text-gradient">Touch</span>
                        </h1>
                        <p className="page-subtitle">
                            Have questions? We'd love to hear from you. <br />
                            <span className="text-neon-cyan">Our team typically responds within 2 hours.</span>
                        </p>
                    </motion.div>

                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {/* Contact Info */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-xl)' }}>Contact Information</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                                <GlassCard variant="cyan" hover style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(0, 255, 255, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Phone size={24} style={{ color: 'var(--neon-cyan)' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>WhatsApp Only</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>+60 11-6326 3808</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>+60 14-330 6131</p>
                                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--neon-cyan)' }}>Call via WhatsApp Only</p>
                                    </div>
                                </GlassCard>

                                <GlassCard variant="magenta" hover style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(255, 0, 255, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <Mail size={24} style={{ color: 'var(--neon-magenta)' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>Email</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>a.basyir@sheerssoft.com</p>
                                        <p style={{ color: 'var(--text-secondary)' }}>m.hafiz@sheerssoft.com</p>
                                        <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--neon-magenta)' }}>24/7 Support</p>
                                    </div>
                                </GlassCard>

                                <GlassCard variant="green" hover style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', padding: 'var(--space-lg)' }}>
                                    <div style={{ background: 'rgba(124, 252, 0, 0.1)', padding: '12px', borderRadius: '50%' }}>
                                        <MapPin size={24} style={{ color: 'var(--neon-green)' }} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold' }}>Office</h3>
                                        <p style={{ color: 'var(--text-secondary)' }}>Kuala Lumpur, Malaysia</p>
                                    </div>
                                </GlassCard>
                            </div>

                            {/* Trust Indicators */}
                            <div style={{ marginTop: 'var(--space-2xl)' }}>
                                <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-md)' }}>Why Contact Us?</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={18} style={{ color: 'var(--neon-green)' }} />
                                        <span style={{ color: 'var(--text-secondary)' }}>Free initial consultation</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={18} style={{ color: 'var(--neon-green)' }} />
                                        <span style={{ color: 'var(--text-secondary)' }}>Customized solution proposal</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={18} style={{ color: 'var(--neon-green)' }} />
                                        <span style={{ color: 'var(--text-secondary)' }}>No obligation quote</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                            <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)' }}>
                                <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-lg)' }}>Send Message</h2>
                                <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--text-secondary)' }}>Name</label>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            style={{
                                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)',
                                                color: 'white', outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--text-secondary)' }}>Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@email.com"
                                            style={{
                                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)',
                                                color: 'white', outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: 'var(--space-xs)', color: 'var(--text-secondary)' }}>Message</label>
                                        <textarea
                                            rows={5}
                                            placeholder="How can we help you?"
                                            style={{
                                                width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)',
                                                border: '1px solid rgba(255,255,255,0.1)', borderRadius: 'var(--radius-sm)',
                                                color: 'white', outline: 'none', resize: 'vertical'
                                            }}
                                        ></textarea>
                                    </div>
                                    <NeonButton variant="primary" style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-sm)' }}>
                                        Send Message <Send size={18} />
                                    </NeonButton>
                                </form>
                            </GlassCard>
                        </motion.div>
                    </div>
                </div>
            </section>
    );
};

export default Contact;
