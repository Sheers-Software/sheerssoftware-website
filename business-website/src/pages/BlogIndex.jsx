import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import './Pages.css';
import './blog/Blog.css';

const articles = [
    {
        id: 'why-ai-is-the-future',
        title: 'The Hidden Cost of Missed Calls: Why AI is the Future of Hotel Revenue',
        excerpt: 'A data-driven feasibility study on how conversational AI agents for hotel call centers lock in uncaptured revenue and drastically reduce operational overhead.',
        date: 'Oct 24, 2024',
        readTime: '7 min read',
        category: 'Hospitality Tech',
        thumbnail: '/hotel_upsell_revenue.png',
        path: '/blog/why-ai-is-the-future'
    },
    {
        id: 'maximizing-adr-with-ai',
        title: 'Maximizing ADR: How AI Concierges are Driving Up Ancillary Revenue',
        excerpt: 'Discover how automated upselling strategies at check-in and during the guest stay can seamlessly increase your Average Daily Rate without lifting a finger.',
        date: 'Oct 28, 2024',
        readTime: '6 min read',
        category: 'Revenue Strategy',
        thumbnail: '/hotel_upsell_revenue.png',
        path: '/blog/maximizing-adr'
    }
];

const BlogIndex = () => {
    return (
        <PageLayout>
            <section className="section">
                <div className="container">
                    {/* Hero — uses page-hero pattern from Pages.css */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="page-hero text-center"
                    >
                        <h1 className="page-title">
                            Industry <span className="text-gradient">Insights</span> & Feasibility Studies
                        </h1>
                        <p className="page-subtitle">
                            Explore our latest research on how AI is transforming hospitality operations and revenue management.
                        </p>
                    </motion.div>

                    {/* Article Grid — uses design tokens */}
                    <div className="blog-grid">
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link to={article.path} style={{ textDecoration: 'none' }}>
                                    <GlassCard variant="cyan" hover style={{ padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div className="blog-thumbnail" style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                                            <img
                                                src={article.thumbnail}
                                                alt={article.title}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform var(--transition-base)' }}
                                            />
                                        </div>
                                        <div style={{ padding: 'var(--space-lg)', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                                            <div style={{ display: 'flex', gap: 'var(--space-sm)', alignItems: 'center', marginBottom: 'var(--space-sm)', color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                                                <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>{article.category}</span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {article.date}</span>
                                            </div>
                                            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'white', marginBottom: 'var(--space-sm)', lineHeight: 1.4 }}>
                                                {article.title}
                                            </h3>
                                            <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-base)', lineHeight: 1.7, marginBottom: 'var(--space-md)', flexGrow: 1 }}>
                                                {article.excerpt}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', color: 'var(--neon-cyan)', fontWeight: 'bold', fontSize: 'var(--font-size-sm)', marginTop: 'auto' }}>
                                                Read Article <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default BlogIndex;
