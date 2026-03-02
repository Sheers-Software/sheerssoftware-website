"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Heart, Coffee, Zap, CheckCircle, Shield, Rocket } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';


const Career = () => {
    const jobs = [
        {
            title: "Senior Frontend Engineer",
            type: "Full-time",
            location: "Remote / Kuala Lumpur",
            dept: "Engineering",
            desc: "We're looking for a React expert to lead our frontend initiatives and build world-class user interfaces."
        },
        {
            title: "AI Solutions Architect",
            type: "Full-time",
            location: "Kuala Lumpur",
            dept: "AI & Data",
            desc: "Design and implement cutting-edge AI solutions for our enterprise clients using LLMs and vector databases."
        },
        {
            title: "Digital Marketing Specialist",
            type: "Contract",
            location: "Remote",
            dept: "Marketing",
            desc: "Drive our growth strategy and help us reach more businesses in need of digital transformation."
        }
    ];

    const perks = [
        { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical coverage and wellness allowance." },
        { icon: Clock, title: "Flexible Hours", desc: "Work when you're most productive. We focus on output, not hours." },
        { icon: Zap, title: "Latest Tech", desc: "MacBook Pro and premium software subscriptions for every team member." },
        { icon: Coffee, title: "Remote First", desc: "Work from anywhere or join us at our modern HQ in KL." }
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
                            Join Our <span className="text-gradient">Team</span>
                        </h1>
                        <p className="page-subtitle">
                            Build the future of digital operations with passionate problem solvers.
                        </p>
                    </motion.div>

                    {/* Perks */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-3xl)' }}>
                        {perks.map((perk, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ textAlign: 'center' }}
                            >
                                <div style={{ background: 'rgba(255,255,255,0.05)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)' }}>
                                    <perk.icon size={24} className="text-neon-cyan" />
                                </div>
                                <h3 style={{ fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>{perk.title}</h3>
                                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>{perk.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Culture Section */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-3xl)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', alignItems: 'center' }}>
                            <div>
                                <h2 className="section-title">Life at <span className="text-gradient">SheersSoft</span></h2>
                                <p style={{ lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                                    We believe in a culture of innovation, continuous learning, and work-life balance.
                                    Our team is diverse, inclusive, and driven by a shared passion for technology.
                                    We don't just build software; we build careers.
                                </p>
                                <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={20} className="text-neon-green" />
                                        <span>Continuous Learning & Development Budget</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={20} className="text-neon-green" />
                                        <span>Regular Team Building & Hackathons</span>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                        <CheckCircle size={20} className="text-neon-green" />
                                        <span>Open & Transparent Leadership</span>
                                    </li>
                                </ul>
                            </div>
                            <GlassCard variant="magenta" style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-md)' }}>Our Values</h3>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
                                    <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                                        <Zap size={24} className="text-neon-magenta mb-2 mx-auto" />
                                        <h4 style={{ fontWeight: 'bold' }}>Innovation</h4>
                                    </div>
                                    <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                                        <Heart size={24} className="text-neon-magenta mb-2 mx-auto" />
                                        <h4 style={{ fontWeight: 'bold' }}>Empathy</h4>
                                    </div>
                                    <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                                        <Shield size={24} className="text-neon-magenta mb-2 mx-auto" />
                                        <h4 style={{ fontWeight: 'bold' }}>Integrity</h4>
                                    </div>
                                    <div style={{ padding: 'var(--space-md)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)' }}>
                                        <Rocket size={24} className="text-neon-magenta mb-2 mx-auto" />
                                        <h4 style={{ fontWeight: 'bold' }}>Growth</h4>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Job Openings */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} style={{ marginBottom: 'var(--space-3xl)' }}>
                        <h2 className="section-title text-center">Open Positions</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)', maxWidth: '800px', margin: '0 auto' }}>
                            {jobs.map((job, index) => (
                                <GlassCard key={index} variant="cyan" hover style={{ padding: 'var(--space-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                                    <div style={{ flex: 1, minWidth: '250px' }}>
                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold', marginBottom: 'var(--space-xs)' }}>{job.title}</h3>
                                        <div style={{ display: 'flex', gap: 'var(--space-md)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-sm)' }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Briefcase size={14} /> {job.dept}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {job.type}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {job.location}</span>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)' }}>{job.desc}</p>
                                    </div>
                                    <NeonButton variant="secondary" size="sm">
                                        Apply Now <ArrowRight size={16} />
                                    </NeonButton>
                                </GlassCard>
                            ))}
                        </div>
                    </motion.div>

                    {/* Internship Program */}
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                        <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
                            <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-md)' }}>SheersSoft Internship Program</h2>
                            <p style={{ maxWidth: '600px', margin: '0 auto var(--space-xl)', color: 'var(--text-secondary)' }}>
                                Kickstart your career with hands-on experience in real-world projects.
                                We offer structured mentorship for students in Computer Science, Data Science, and Digital Marketing.
                            </p>
                            <NeonButton variant="primary" size="lg">
                                Apply for Internship
                            </NeonButton>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
    );
};

export default Career;
