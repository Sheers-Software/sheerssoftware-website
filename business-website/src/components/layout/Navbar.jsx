"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle, ChevronDown, Bot, Globe, Code, LayoutTemplate } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentY = Math.max(0, window.scrollY);
            if (currentY < 80) {
                setVisible(true);
            } else if (currentY > lastScrollY.current) {
                setVisible(false); // scrolling down
            } else {
                setVisible(true);  // scrolling up
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            path: 'https://ai.sheerssoft.com', label: 'Product', external: true, dropdown: [
                { path: 'https://ai.sheerssoft.com', label: 'Nocturn AI', description: 'Captures every inquiry and qualifies every lead — even while you sleep', icon: <Bot size={24} className="text-neon-cyan" /> },
            ]
        },
        { path: '/blog', label: 'Blog', external: false },
        {
            path: '/solutions', label: 'Solutions', external: false, dropdown: [
                { path: '/portfolio/', label: 'Portfolio', description: 'See our work across 7 industries — restaurants, hotels, real estate & more', icon: <LayoutTemplate size={24} className="text-neon-cyan" />, external: true },
                { path: '/solutions', label: 'Web & Mobile Solutions', description: 'High-performance websites, PWAs and native apps built for scale', icon: <Globe size={24} className="text-neon-cyan" /> },
                { path: '/solutions', label: 'Software Engineering', description: 'Robust, maintainable codebases and digital transformation', icon: <Code size={24} className="text-neon-cyan" /> },
            ]
        },
        { path: '/about', label: 'About', external: false },
        { path: '/contact', label: 'Contact', external: false },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className={`navbar${!visible && !isOpen ? ' navbar--hidden' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link href="/" className="navbar-logo">
                        Sheers<span className="nav-logo-accent">.</span>Soft
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <div key={link.path} className="nav-item">
                                {link.external ? (
                                    <a href={link.path} className="nav-link dropdown-toggle">
                                        {link.label}
                                        {link.dropdown && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                                    </a>
                                ) : (
                                    <Link href={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''} dropdown-toggle`}>
                                        {link.label}
                                        {link.dropdown && <ChevronDown size={14} style={{ marginLeft: '4px' }} />}
                                    </Link>
                                )}
                                {link.dropdown && (
                                    <div className="dropdown-menu">
                                        {link.dropdown.map((dropLink, i) => (
                                            <a key={i} href={dropLink.path} className="dropdown-item">
                                                <div className="dropdown-icon">{dropLink.icon}</div>
                                                <div className="dropdown-content">
                                                    <span className="dropdown-title">{dropLink.label}</span>
                                                    <span className="dropdown-desc">{dropLink.description}</span>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Contact Us Button */}
                    <Link href="/contact" className="contact-btn">
                        <MessageCircle size={20} />
                        <span>Contact Us</span>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu glass">
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="mobile-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                        <a
                            href="/portfolio/"
                            className="mobile-link"
                            onClick={() => setIsOpen(false)}
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <LayoutTemplate size={16} />
                            Our Portfolio
                        </a>
                        <Link
                            href="/contact"
                            className="mobile-contact"
                            onClick={() => setIsOpen(false)}
                        >
                            <MessageCircle size={20} />
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
