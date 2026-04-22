"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/home.css";

export function Navbar({ className }: { className?: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "";

    return (
        <nav className={`navbar ${className || ""} ${isHome ? "transparent" : "solid"}`} id="navbar">
            <div className="container navbar-inner" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 0',
                position: 'relative'
            }}>
                <a href="/" className="navbar-logo" aria-label="Nocturn AI Home" style={{ display: 'flex', alignItems: 'center', gap: '8px', zIndex: 1002 }}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="navbar-logo-icon">
                        <circle cx="16" cy="16" r="14" stroke={isHome ? "white" : "var(--color-navy)"} strokeWidth="2.5" style={{ fill: 'none' }} />
                        <path d="M16 6C10.5 6 8 12 8 16c0 4 2.5 10 8 10 -3-2-4.5-5.5-4.5-10S13 8 16 6z" fill={isHome ? "white" : "var(--color-navy)"} />
                    </svg>
                    <span className="navbar-brand" style={{ color: isHome ? 'white' : 'var(--color-navy)', fontSize: '24px', fontWeight: 700, fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}>Nocturn AI</span>
                </a>

                <div className="navbar-links hide-mobile">
                    <div
                        className="nav-dropdown-wrapper"
                        onMouseEnter={() => setActiveDropdown('solutions')}
                        onMouseLeave={() => setActiveDropdown(null)}
                    >
                        <button className="nav-link-btn nav-link-item">Solutions ↓</button>
                        <AnimatePresence>
                            {activeDropdown === 'solutions' && (
                                <div className="dropdown-container">
                                    <NavDropdown />
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                    <a href="/how-it-works" className="nav-link-item">How It Works</a>
                    <a href="/pilot" className="nav-link-item">Pricing</a>
                    <a href="/about" className="nav-link-item">About</a>
                    <a href="/blog" className="nav-link-item">Blog</a>
                </div>

                <div className="navbar-actions hide-mobile" style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <a href="https://app.sheerssoft.com" className={isHome ? "btn btn-outline-white" : "btn btn-outline-navy"}>Log In</a>
                    <a href="/apply" className={isHome ? "btn btn-solid-white" : "btn btn-solid-green"}>Apply Now</a>
                </div>

                <button
                    className="navbar-hamburger hide-desktop"
                    aria-label="Open navigation menu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span style={{ background: isHome ? 'white' : 'var(--color-navy)' }}></span>
                    <span style={{ background: isHome ? 'white' : 'var(--color-navy)' }}></span>
                    <span style={{ background: isHome ? 'white' : 'var(--color-navy)' }}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="navbar-mobile-menu hide-desktop open"
                        id="mobile-menu"
                        style={{ background: 'white' }}
                    >
                        <a href="/solutions" style={{ color: 'var(--color-navy)' }}>Solutions</a>
                        <a href="/how-it-works" style={{ color: 'var(--color-navy)' }}>How It Works</a>
                        <a href="/pilot" style={{ color: 'var(--color-navy)' }}>Pricing</a>
                        <a href="/about" style={{ color: 'var(--color-navy)' }}>About</a>
                        <a href="/blog" style={{ color: 'var(--color-navy)' }}>Blog</a>
                        <div style={{ height: 1, background: "var(--color-gray-100)", margin: "8px 0" }}></div>
                        <a href="https://app.sheerssoft.com" style={{ color: "var(--color-navy)" }}>Log In</a>
                        <a href="/apply" className="btn btn-solid-green" style={{ width: "100%", marginTop: 8 }}>
                            Apply Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

function NavDropdown() {
    const items = [
        {
            title: "Direct Booking Recovery",
            desc: "Stop inquiries from entering 'The Graveyard'.",
            icon: "🎯",
            href: "/how-it-works#direct"
        },
        {
            title: "Group & Bulk Booking",
            desc: "Handle 50+ guest inquiries instantly.",
            icon: "🏨",
            href: "/how-it-works#group"
        },
        {
            title: "OTA Bypass Strategy",
            desc: "Turn expensive OTA leads into direct revenue.",
            icon: "⚡",
            href: "/how-it-works#ota"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="dropdown-card"
        >
            {items.map((item, idx) => (
                <a key={idx} href={item.href} className="dropdown-item">
                    <div className="dropdown-info">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                    </div>
                </a>
            ))}
        </motion.div>
    );
}
