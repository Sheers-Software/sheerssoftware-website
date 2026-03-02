"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';


const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(0);

    const faqs = [
        {
            question: "What services does SheersSoft provide?",
            answer: "We specialize in digital transformation solutions, including custom web and mobile app development, AI & automation integration, and enterprise software engineering. Our flagship product, Resort Genius, is an AI-powered operations platform for the hospitality industry."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity. A standard corporate website takes 2-4 weeks, while a custom web application or mobile app can take 8-12 weeks. We provide a detailed timeline during our initial consultation."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes! We offer comprehensive maintenance and support packages to ensure your digital products remain secure, up-to-date, and performant. Our support team is available via email and ticketing system."
        },
        {
            question: "Can you integrate AI into my existing business?",
            answer: "Absolutely. We specialize in identifying high-impact areas for automation within your existing workflows. Whether it's customer service chatbots, data analysis, or process automation, we can seamlessly integrate AI solutions."
        },
        {
            question: "What is your pricing model?",
            answer: "We offer both project-based pricing and retainer models. For standard services, we have tiered packages (Starter, Professional, Enterprise). For custom solutions, we provide a tailored quote based on your specific requirements."
        },
        {
            question: "Where is SheersSoft located?",
            answer: "We are based in Kuala Lumpur, Malaysia, but we serve clients globally. Our team is accustomed to working remotely and collaborating with international teams."
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
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h1>
                        <p className="page-subtitle">
                            Everything you need to know about our services and how we work.
                        </p>
                    </motion.div>

                    <div style={{ maxWidth: '800px', margin: 'var(--space-2xl) auto 0' }}>
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ marginBottom: 'var(--space-md)' }}
                            >
                                <GlassCard
                                    variant="cyan"
                                    style={{ padding: 'var(--space-lg)', cursor: 'pointer' }}
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'bold', color: openIndex === index ? 'var(--neon-cyan)' : 'white' }}>
                                            {faq.question}
                                        </h3>
                                        {openIndex === index ? <Minus size={20} className="text-neon-cyan" /> : <Plus size={20} />}
                                    </div>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p style={{ marginTop: 'var(--space-md)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default FAQ;
