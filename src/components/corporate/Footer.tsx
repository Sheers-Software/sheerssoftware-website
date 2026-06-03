import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <h3 className="brand-name">Sheers Software</h3>
                        <p className="brand-tagline">
                            AI automation for Malaysian SMEs. Built and deployed in 3 weeks.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.linkedin.com/in/ahmad-basyir-azahari/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <LinkedinIcon size={20} />
                            </a>
                            <a href="https://www.instagram.com/abasyir_launch" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                                <InstagramIcon size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Pages</h4>
                        <Link href="/about" className="footer-link">About</Link>
                        <Link href="/nocturn-ai" className="footer-link">Product</Link>
                        <Link href="/solutions" className="footer-link">Solutions</Link>
                        <Link href="/blog" className="footer-link">Blog</Link>
                        <Link href="/contact" className="footer-link">Contact</Link>
                    </div>

                    {/* More Links */}
                    <div className="footer-column">
                        <h4 className="footer-title">Resources</h4>
                        <Link href="/faq" className="footer-link">FAQ</Link>
                        <Link href="/support" className="footer-link">Support</Link>
                        <Link href="/career" className="footer-link">Career</Link>
                    </div>

                    {/* Contact */}
                    <div className="footer-column">
                        <h4 className="footer-title">Contact Us</h4>
                        <a href="mailto:a.basyir@sheerssoft.com" className="footer-link">
                            <Mail size={16} />
                            a.basyir@sheerssoft.com
                        </a>
                        <a href="https://cal.com/ahmadbasyir/discovery" className="footer-link" target="_blank" rel="noopener noreferrer">
                            <Mail size={16} />
                            Book a Discovery Call
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
                        © {new Date().getFullYear()} Sheers Software Sdn. Bhd. All rights reserved.
                    </p>
                    <div className="footer-legal">
                        <Link href="/privacy" className="legal-link">Privacy Policy</Link>
                        <span className="legal-divider">•</span>
                        <Link href="/terms" className="legal-link">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
