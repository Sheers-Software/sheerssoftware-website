"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimatedBackground from '../effects/AnimatedBackground';

const PageLayout = ({ children }) => {
    return (
        <div className="page-layout">
            <AnimatedBackground />
            <Navbar />
            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="main-content"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default PageLayout;
