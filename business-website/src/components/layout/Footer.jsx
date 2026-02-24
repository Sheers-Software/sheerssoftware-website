import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Twitter, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3 className="brand-name text-gradient">SheersSoft</h3>
                        <p className="brand-tagline">
                            Empowering businesses with technology, strategy, and support.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/ahmad-basyir-azahari/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="social-link" aria-label="Facebook">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Pages</h4>
                        <Link to="/" className="footer-link">Home</Link>
                        <Link to="/about" className="footer-link">About</Link>
                        <a href="https://ai.sheerssoft.com" className="footer-link">Product</a>
                        <Link to="/solution" className="footer-link">Solution</Link>
                        <Link to="/demand" className="footer-link">Demand</Link>
                        <Link to="/contact" className="footer-link">Contact</Link>
                    </div>

                    {/* More Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Resources</h4>
                        <Link to="/faq" className="footer-link">FAQ</Link>
                        <Link to="/support" className="footer-link">Support</Link>
                        <Link to="/career" className="footer-link">Career</Link>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contact Us</h4>
                        <a href="mailto:a.basyir@sheerssoft.com" className="footer-link">
                            <Mail size={16} />
                            a.basyir@sheerssoft.com
                        </a>
                        <a href="mailto:m.hafiz@sheerssoft.com" className="footer-link">
                            <Mail size={16} />
                            m.hafiz@sheerssoft.com
                        </a>
                        <div className="footer-link">
                            <MapPin size={16} />
                            Kuala Lumpur, Malaysia
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2024 SheersSoft. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link to="/privacy" className="legal-link">Privacy Policy</Link>
                        <span className="legal-divider">•</span>
                        <Link to="/terms" className="legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
