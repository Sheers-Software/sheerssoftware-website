"use client";
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

const NotificationModal = ({ show, type, message, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000); // Auto-dismiss after 5 seconds

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    const config = {
        success: {
            icon: CheckCircle,
            color: '#00ffff',
            gradient: 'linear-gradient(135deg, rgba(0,255,255,0.2) 0%, rgba(124,252,0,0.2) 100%)',
            borderColor: 'rgba(0,255,255,0.5)',
            title: 'Success!'
        },
        error: {
            icon: XCircle,
            color: '#ff00ff',
            gradient: 'linear-gradient(135deg, rgba(255,0,255,0.2) 0%, rgba(255,0,100,0.2) 100%)',
            borderColor: 'rgba(255,0,255,0.5)',
            title: 'Error!'
        }
    };

    const current = config[type] || config.success;
    const Icon = current.icon;

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.7)',
                            backdropFilter: 'blur(8px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px'
                        }}
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                position: 'relative',
                                maxWidth: '500px',
                                width: '100%',
                                background: current.gradient,
                                backdropFilter: 'blur(20px)',
                                border: `2px solid ${current.borderColor}`,
                                borderRadius: '20px',
                                padding: '40px 30px',
                                textAlign: 'center',
                                boxShadow: `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${current.color}40`
                            }}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '15px',
                                    right: '15px',
                                    background: 'rgba(255,255,255,0.1)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    color: 'white'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = 'rgba(255,255,255,0.2)';
                                    e.target.style.transform = 'rotate(90deg)';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = 'rgba(255,255,255,0.1)';
                                    e.target.style.transform = 'rotate(0deg)';
                                }}
                            >
                                <X size={18} />
                            </button>

                            {/* Icon */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `rgba(${type === 'success' ? '0,255,255' : '255,0,255'},0.2)`,
                                    border: `3px solid ${current.color}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px',
                                    boxShadow: `0 0 30px ${current.color}60`
                                }}
                            >
                                <Icon size={40} style={{ color: current.color }} />
                            </motion.div>

                            {/* Title */}
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{
                                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                                    fontWeight: 'bold',
                                    color: current.color,
                                    marginBottom: '15px',
                                    textShadow: `0 0 20px ${current.color}60`
                                }}
                            >
                                {current.title}
                            </motion.h2>

                            {/* Message */}
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                style={{
                                    fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                                    color: 'rgba(255,255,255,0.9)',
                                    lineHeight: 1.6,
                                    marginBottom: '10px'
                                }}
                            >
                                {message}
                            </motion.p>

                            {/* Auto-dismiss indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                style={{
                                    fontSize: '0.85rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    marginTop: '20px'
                                }}
                            >
                                Auto-dismissing in 5 seconds...
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NotificationModal;
