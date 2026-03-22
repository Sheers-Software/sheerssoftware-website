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
        <section id="use-cases" className="section" style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="text-center mb-10">
                    <h2 className="section-title">Choose your use case</h2>
                </div>

                <div className="use-cases-container w-full max-w-4xl mx-auto">
                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {Object.values(cases).map((c) => (
                            <button
                                key={c.id}
                                onClick={() => setActiveTab(c.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                                    activeTab === c.id 
                                        ? 'bg-white/10 border border-neon-cyan text-white shadow-[0_0_15px_rgba(0,255,255,0.2)]' 
                                        : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {c.icon}
                                <span>{c.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="relative min-h-[300px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="absolute inset-0 flex flex-col items-center text-center p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
                            >
                                <h3 className="text-2xl font-bold mb-3">{cases[activeTab].title}</h3>
                                <p className="text-xl text-gray-300 mb-8 max-w-2xl">{cases[activeTab].subtitle}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-10 text-left">
                                    <div className="p-5 rounded-xl bg-black/40 border border-white/5">
                                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-2 font-semibold">Solve</p>
                                        <p className="text-white">{cases[activeTab].pain}</p>
                                    </div>
                                    <div className="p-5 rounded-xl bg-black/40 border border-white/5">
                                        <p className="text-sm text-gray-400 uppercase tracking-wider mb-2 font-semibold">Track</p>
                                        <p className="text-white">{cases[activeTab].track}</p>
                                    </div>
                                </div>

                                <Link 
                                    href={cases[activeTab].link} 
                                    className="flex items-center gap-2 text-neon-cyan hover:text-white font-medium text-lg transition-colors"
                                >
                                    Learn more <ArrowRight size={20} />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
