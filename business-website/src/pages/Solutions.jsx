import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code, ShieldCheck, Cpu, Bot, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import NeonButton from '../components/ui/NeonButton';
import './Pages.css';

const Solutions = () => {
    const solutions = [
        {
            icon: Globe,
            title: 'Mobile and Web Solutions',
            desc: 'High-performance digital experiences built for scale and speed.',
            features: [
                'Progressive Web Apps (PWA)',
                'Native Mobile Apps (iOS & Android)',
                'Responsive Web Design',
                'Cross-Platform Development'
            ]
        },
        {
            icon: Code,
            title: 'Software Engineering & Quality',
            desc: 'Robust, maintainable, and secure codebases driven by best practices.',
            features: [
                'Microservices Architecture',
                'Automated Testing (QA)',
                'CI/CD Pipelines',
                'Legacy System Modernization'
            ]
        },
        {
            icon: Cpu,
            title: 'Digital Transformation & AI',
            desc: 'Future-proof your business with intelligent automation and data-driven insights.',
            features: [
                'AI-Powered Automation',
                'Data Analytics & Insights',
                'Cloud Migration Strategy',
                'Process Digitization'
            ]
        }
    ];

    return (
        <PageLayout>
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <h1 className="page-title">
                            Our <span className="text-gradient">Solutions</span>
                        </h1>
                        <p className="page-subtitle">
                            Empowering businesses with cutting-edge technology and engineering excellence.
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
                            >
                                <GlassCard variant="cyan" hover style={{ padding: 'var(--space-xl)', height: '100%' }}>
                                    <solution.icon size={50} style={{ color: 'var(--neon-cyan)', marginBottom: 'var(--space-md)' }} />
                                    <h3 style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'bold', marginBottom: 'var(--space-sm)' }}>{solution.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.6 }}>{solution.desc}</p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)', marginBottom: 'var(--space-xl)' }}>
                                        {solution.features.map((feature, i) => (
                                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                                                <div style={{ background: 'rgba(0, 255, 255, 0.1)', borderRadius: '50%', padding: '2px' }}>
                                                    <Check size={14} style={{ color: 'var(--neon-cyan)' }} />
                                                </div>
                                                <span style={{ color: 'var(--text-primary)', fontSize: 'var(--font-size-sm)' }}>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link to="/contact">
                                        <NeonButton variant="secondary" style={{ width: '100%', justifyContent: 'center' }}>
                                            Learn More <ArrowRight size={16} />
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
                                Ready to Transform Your Business?
                            </h2>
                            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)' }}>
                                Let's build the future together with our expert engineering teams.
                            </p>
                            <Link to="/contact">
                                <NeonButton variant="primary" size="lg">
                                    Start Your Project
                                </NeonButton>
                            </Link>
                        </GlassCard>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Solutions;
