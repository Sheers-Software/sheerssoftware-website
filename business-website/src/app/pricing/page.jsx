"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Shield, Rocket } from 'lucide-react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import NeonButton from '@/components/ui/NeonButton';


const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            price: "RM 2,500",
            period: "/month",
            desc: "Perfect for small businesses starting their digital journey.",
            features: [
                "Basic Web Development",
                "5 Pages Website",
                "Basic SEO Setup",
                "Email Support",
                "Monthly Maintenance"
            ],
            icon: Zap,
            variant: "cyan",
            popular: false
        },
        {
            name: "Professional",
            price: "RM 5,000",
            period: "/month",
            desc: "Comprehensive solution for growing companies.",
            features: [
                "Custom Web Application",
                "CMS Integration",
                "Advanced SEO & Analytics",
                "Priority Support",
                "Weekly Backups",
                "Performance Optimization"
            ],
            icon: Rocket,
            variant: "magenta",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            desc: "Tailored digital transformation for large organizations.",
            features: [
                "Full-Scale Digital Platform",
                "AI & Automation Integration",
                "Custom API Development",
                "24/7 Dedicated Support",
                "SLA Guarantee",
                "Security Audits"
            ],
            icon: Shield,
            variant: "green",
            popular: false
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
                            Simple <span className="text-gradient">Pricing</span>
                        </h1>
                        <p className="page-subtitle">
                            Transparent packages designed to scale with your business needs.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-2xl)', marginTop: 'var(--space-2xl)' }}>
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ position: 'relative' }}
                            >
                                {plan.popular && (
                                    <div style={{
                                        position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)',
                                        background: 'var(--neon-magenta)', color: 'white', padding: '4px 12px',
                                        borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', zIndex: 10,
                                        boxShadow: '0 0 10px var(--neon-magenta)'
                                    }}>
                                        MOST POPULAR
                                    </div>
                                )}
                                <GlassCard variant={plan.variant} hover style={{ padding: 'var(--space-xl)', height: '100%', display: 'flex', flexDirection: 'column', border: plan.popular ? '2px solid var(--neon-magenta)' : undefined }}>
                                    <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                                        <plan.icon size={40} style={{ color: `var(--neon-${plan.variant})`, marginBottom: 'var(--space-md)' }} />
                                        <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 'bold' }}>{plan.name}</h3>
                                        <div style={{ margin: 'var(--space-md) 0' }}>
                                            <span style={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}>{plan.price}</span>
                                            <span style={{ color: 'var(--text-secondary)' }}>{plan.period}</span>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)' }}>{plan.desc}</p>
                                    </div>

                                    <div style={{ flex: 1, marginBottom: 'var(--space-xl)' }}>
                                        {plan.features.map((feature, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
                                                <Check size={16} style={{ color: `var(--neon-${plan.variant})` }} />
                                                <span style={{ fontSize: 'var(--font-size-sm)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/contact">
                                        <NeonButton variant={plan.popular ? "primary" : "secondary"} style={{ width: '100%', justifyContent: 'center' }}>
                                            Choose Plan
                                        </NeonButton>
                                    </Link>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Pricing;
