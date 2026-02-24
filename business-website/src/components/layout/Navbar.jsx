import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home', external: false },
        { path: 'https://ai.sheerssoft.com', label: 'Product', external: true },
        { path: '/demand', label: 'Demand', external: false },
        { path: '/solution', label: 'Solution', external: false },
        { path: '/about', label: 'About', external: false },
        { path: '/contact', label: 'Contact', external: false },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar glass-strong">
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <Link to="/" className="navbar-logo">
                        <span className="text-gradient">SheersSoft</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.path}
                                    href={link.path}
                                    className="nav-link"
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                    </div>

                    {/* Contact Us Button */}
                    <Link to="/contact" className="contact-btn">
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
                                    to={link.path}
                                    className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            )
                        ))}
                        <Link
                            to="/contact"
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
