import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import './Pages.css';

const NotFound = () => {
    return (
        <PageLayout>
            <section className="section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ShieldAlert size={80} className="text-neon-red" style={{ margin: '0 auto 2rem', filter: 'drop-shadow(0 0 20px rgba(255, 0, 85, 0.4))' }} />
                        <h1 style={{ fontSize: '6rem', fontWeight: '900', margin: 0, background: 'linear-gradient(135deg, #ff0055, #ff5500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            404
                        </h1>
                        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Lost in the Matrix?</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
                            The page you are looking for has either been moved, deleted, or never existed in the first place.
                        </p>

                        <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                            <Home size={20} /> Return to Home
                        </Link>
                    </motion.div>
                </div>
            </section>
        </PageLayout>
    );
};

export default NotFound;
