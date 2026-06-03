"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/corporate/GlassCard';

const About = () => {
    const companyInfo = {
        name: "Sheers Software Sdn. Bhd.",
        regNo: "202501033756 (1635166-T)",
        structure: "Private Limited Company (Sdn. Bhd.)",
        location: "Malaysia",
        industry: "Software & Technology Services",
        sector: "Technology Solutions"
    };

    const missionFocus = [
        "Every project starts with a free ROI brief — no guesswork, no vague promises.",
        "We build with tools that integrate with what you already use: WhatsApp, Google Sheets, email.",
        "We help clients claim government digitalisation grants that offset project costs."
    ];

    const visionGoals = [
        "Build 50 AI systems for Malaysian SMEs by end of 2027",
        "Establish the AI Operations Sprint as the standard SME automation package in Malaysia",
        "Become a recognised MDEC digital solution provider",
        "Expand to Singapore and Indonesia SME markets by 2028"
    ];

    const impactGoals = [
        { icon: TrendingUp, text: "Every client gets a written ROI brief before spending a single ringgit." },
        { icon: Users, text: "Every system integrates with tools SME teams already use — zero learning curve." },
        { icon: Globe, text: "Every eligible client gets guided through the government digitalisation grant process." }
    ];

    return (
        <section className="section">
            <div className="container">
                {/* Hero */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="page-hero text-center"
                >
                    <h1 className="page-title">
                        Built in Malaysia, for <span className="text-gradient">Malaysian Businesses</span>
                    </h1>
                    <p className="page-subtitle">
                        We create innovative, reliable, and scalable software solutions that help businesses grow.
                    </p>
                </motion.div>

                {/* Company Overview */}
                <div style={{ marginBottom: 'var(--space-3xl)' }}>
                    <GlassCard variant="gradient" style={{ padding: 'var(--space-2xl)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)' }}>
                            <div>
                                <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--space-lg)' }}>Who We Are</h2>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 'var(--space-lg)' }}>
                                    Sheers Software Sdn. Bhd. is a KL-based AI automation firm that builds operational systems for Malaysian SMEs. We specialise in one thing: identifying your single biggest manual workflow and replacing it with an AI system that runs automatically — deployed in 3 weeks.
                                </p>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                                    We&apos;re not a large agency with account managers and 6-month timelines. We&apos;re a focused team that moves fast, speaks finance — so you always know your ROI before we build anything — and works exclusively with Malaysian businesses ready to stop doing things manually.
                                </p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: 'var(--space-xl)', borderRadius: 'var(--radius-md)' }}>
                                <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', color: 'var(--neon-cyan)' }}>Company Details</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-xs)' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Legal Name</span>
                                        <span style={{ fontWeight: '600' }}>{companyInfo.name}</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-xs)' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Registration No.</span>
                                        <span style={{ fontWeight: '600' }}>{companyInfo.regNo}</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-xs)' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Structure</span>
                                        <span style={{ fontWeight: '600' }}>{companyInfo.structure}</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-xs)' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Location</span>
                                        <span style={{ fontWeight: '600' }}>{companyInfo.location}</span>
                                    </li>
                                    <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 'var(--space-xs)' }}>
                                        <span style={{ color: 'var(--text-secondary)' }}>Industry</span>
                                        <span style={{ fontWeight: '600' }}>{companyInfo.industry}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Mission & Vision */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-xl)', marginBottom: 'var(--space-3xl)' }}>
                    {/* Mission */}
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <GlassCard variant="cyan" style={{ padding: 'var(--space-xl)', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                <Target size={32} style={{ color: 'var(--neon-cyan)' }} />
                                <h2 style={{ fontSize: 'var(--font-size-2xl)', margin: 0 }}>Our Focus</h2>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                                To give every Malaysian SME access to the same operational efficiency that enterprise companies have — without the enterprise price tag, the 6-month timeline, or the requirement to hire a tech team.
                            </p>
                            <div>
                                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)' }}>Mission Focus:</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                    {missionFocus.map((item, index) => (
                                        <li key={index} style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'start' }}>
                                            <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-cyan)', marginTop: '8px' }}></div>
                                            <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>
                    </motion.div>

                    {/* Vision */}
                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <GlassCard variant="magenta" style={{ padding: 'var(--space-xl)', height: '100%' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                                <Globe size={32} style={{ color: 'var(--neon-magenta)' }} />
                                <h2 style={{ fontSize: 'var(--font-size-2xl)', margin: 0 }}>Where We&apos;re Going</h2>
                            </div>
                            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.6, marginBottom: 'var(--space-lg)' }}>
                                To be the most trusted AI automation firm for Malaysian SMEs — the company a clinic owner, a property agency director, or an F&amp;B chain operator calls first when they want to stop doing things manually.
                            </p>
                            <div>
                                <h4 style={{ color: 'var(--neon-magenta)', marginBottom: 'var(--space-md)' }}>Vision Goals:</h4>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                                    {visionGoals.map((item, index) => (
                                        <li key={index} style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'start' }}>
                                            <div style={{ minWidth: '6px', height: '6px', borderRadius: '50%', background: 'var(--neon-magenta)', marginTop: '8px' }}></div>
                                            <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>

                {/* Impact Goals */}
                <div style={{ marginBottom: 'var(--space-3xl)' }}>
                    <h2 className="section-title text-center">Our Impact Goals</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }}>
                        {impactGoals.map((goal, index) => (
                            <GlassCard key={index} variant="green" hover style={{ padding: 'var(--space-xl)', textAlign: 'center' }}>
                                <goal.icon size={40} style={{ color: 'var(--neon-green)', marginBottom: 'var(--space-md)', margin: '0 auto' }} />
                                <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.6 }}>{goal.text}</p>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
