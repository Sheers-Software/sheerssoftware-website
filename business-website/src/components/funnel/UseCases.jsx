'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const UseCases = () => {
    const [activeTab, setActiveTab] = useState('reservation');

    const cases = {
        reservation: {
            id: 'reservation',
            title: 'Reservation Managers',
            subtitle: 'You handle 50+ daily inquiries across WhatsApp, email, and phone.',
            pain: 'The morning backlog, missed follow-ups, and manual triage.',
            track: 'Response times, overnight inquiry volume, automated follow-up success.',
            link: '#revenue-audit',
            icon: <Users size={20} />
        },
        revenue: {
            id: 'revenue',
            title: 'Revenue Managers',
            subtitle: "You're losing 15-25% of bookings to OTA commissions.",
            pain: 'High OTA reliance, unmeasurable lead value, and blind spots.',
            track: 'Direct booking conversions, dropped inquiries, exact lost revenue.',
            link: '#revenue-audit',
            icon: <TrendingUp size={20} />
        },
        gm: {
            id: 'gm',
            title: 'General Managers',
            subtitle: 'Your ownership wants higher RevPAR with a flat budget.',
            pain: 'Staff turnover, high OTA reliance, and dropping CSAT scores.',
            track: 'Labor allocation, guest satisfaction, direct channel ROI.',
            link: '#revenue-audit',
            icon: <CheckCircle size={20} />
        }
    };

    return (
        <section id="use-cases" className="section use-cases-section">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                    <h2 className="section-title">Choose your use case</h2>
                </div>

                <div className="use-cases-wrapper">
                    {/* Tabs */}
                    <div className="use-case-tabs">
                        {Object.values(cases).map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setActiveTab(c.id)}
                                className={`use-case-tab${activeTab === c.id ? ' active' : ''}`}
                            >
                                {c.icon}
                                <span>{c.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="use-case-panel glass"
                        >
                            <h3 className="use-case-panel-title">{cases[activeTab].title}</h3>
                            <p className="use-case-panel-subtitle">{cases[activeTab].subtitle}</p>

                            <div className="use-case-metrics">
                                <div className="use-case-metric-card">
                                    <p className="use-case-metric-label">Solve</p>
                                    <p className="use-case-metric-text">{cases[activeTab].pain}</p>
                                </div>
                                <div className="use-case-metric-card">
                                    <p className="use-case-metric-label">Track</p>
                                    <p className="use-case-metric-text">{cases[activeTab].track}</p>
                                </div>
                            </div>

                            <Link href={cases[activeTab].link} className="use-case-link text-neon-cyan">
                                Learn more <ArrowRight size={20} />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
