"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, Home, Send, HelpCircle, X, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "601163263808";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"home" | "messages" | "help">("home");
    const [isVisible, setIsVisible] = useState(false);
    const widgetRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!isVisible) return null;

    const openWhatsApp = (text: string = "Hi Basyir, I'd like to learn more about Nocturn AI.") => {
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    };

    return (
        <div className="chat-widget-container" ref={widgetRef}>
            {/* Widget Window */}
            <div className={`chat-window ${isOpen ? "open" : ""}`}>
                {/* Header */}
                <div className="chat-header">
                    <div className="header-info">
                        <div className="avatar">B</div>
                        <div>
                            <h3>Basyir</h3>
                            <p>Founder • Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="close-btn">
                        <X size={20} />
                    </button>
                </div>

                {/* Content Area */}
                <div className="chat-content">
                    {activeTab === "home" && (
                        <div className="tab-home">
                            <div className="welcome-card">
                                <h2>Hi there! 👋</h2>
                                <p>How can we help you today? Whether you're interested in our Founding Cohort or have a technical question, we're here for you.</p>
                                <button onClick={() => openWhatsApp()} className="start-chat-btn">
                                    <span>Send us a message</span>
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="quick-links">
                                <button onClick={() => openWhatsApp("Hi, I'm interested in the Founding Cohort.")} className="quick-link">
                                    Apply for Founding Cohort
                                    <ChevronRight size={16} />
                                </button>
                                <button onClick={() => setActiveTab("help")} className="quick-link">
                                    Search for help
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    )}

                    {activeTab === "messages" && (
                        <div className="tab-messages">
                            <div className="empty-state">
                                <MessageCircle size={48} className="empty-icon" />
                                <p>No messages yet</p>
                                <span>Your conversation history will appear here.</span>
                            </div>
                        </div>
                    )}

                    {activeTab === "help" && (
                        <div className="tab-help">
                            <div className="help-search">
                                <input type="text" placeholder="Search for help..." />
                            </div>
                            <div className="help-articles">
                                <a href="/how-it-works" className="help-link">How Nocturn AI works</a>
                                <a href="#faq" onClick={() => setIsOpen(false)} className="help-link">Frequently Asked Questions</a>
                                <a href="/pilot" className="help-link">Pilot Program details</a>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer / Tabs */}
                <div className="chat-footer">
                    <button 
                        className={`tab-btn ${activeTab === "home" ? "active" : ""}`}
                        onClick={() => setActiveTab("home")}
                    >
                        <Home size={20} />
                        <span>Home</span>
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "messages" ? "active" : ""}`}
                        onClick={() => setActiveTab("messages")}
                    >
                        <MessageCircle size={20} />
                        <span>Messages</span>
                    </button>
                    <button 
                        className={`tab-btn ${activeTab === "help" ? "active" : ""}`}
                        onClick={() => setActiveTab("help")}
                    >
                        <HelpCircle size={20} />
                        <span>Help</span>
                    </button>
                </div>
            </div>

            {/* Trigger Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`chat-trigger ${isOpen ? "hidden" : ""}`}
                aria-label="Toggle chat"
            >
                <div className="trigger-dot"></div>
                <MessageCircle size={28} />
            </button>

            <style jsx>{`
                .chat-widget-container {
                    position: fixed;
                    bottom: 24px;
                    right: 24px;
                    z-index: 10000;
                    font-family: var(--font-primary);
                }

                /* Trigger Button */
                .chat-trigger {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: var(--color-navy);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                }
                .chat-trigger:hover {
                    transform: scale(1.1);
                    box-shadow: 0 8px 24px rgba(0,0,0,0.2);
                }
                .chat-trigger.hidden {
                    opacity: 0;
                    transform: scale(0);
                    pointer-events: none;
                }
                .trigger-dot {
                    position: absolute;
                    top: 14px;
                    right: 14px;
                    width: 12px;
                    height: 12px;
                    background: var(--color-hyros-green);
                    border: 2px solid var(--color-navy);
                    border-radius: 50%;
                }

                /* Window */
                .chat-window {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 380px;
                    height: 600px;
                    max-height: calc(100vh - 48px);
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 12px 48px rgba(0,0,0,0.2);
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(20px) scale(0.95);
                    transform-origin: bottom right;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    pointer-events: none;
                }
                .chat-window.open {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                    pointer-events: auto;
                }

                /* Header */
                .chat-header {
                    background: var(--color-navy);
                    padding: 24px;
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                }
                .header-info {
                    display: flex;
                    gap: 12px;
                    align-items: center;
                }
                .avatar {
                    width: 44px;
                    height: 44px;
                    background: var(--color-hyros-blue);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 18px;
                }
                .header-info h3 { font-size: 16px; margin: 0; }
                .header-info p { font-size: 12px; opacity: 0.7; margin: 0; }
                .close-btn { color: white; opacity: 0.5; transition: opacity 0.2s; }
                .close-btn:hover { opacity: 1; }

                /* Content */
                .chat-content {
                    flex: 1;
                    overflow-y: auto;
                    background: #F9FAFB;
                    padding: 20px;
                }

                /* Home Tab */
                .welcome-card {
                    background: white;
                    padding: 24px;
                    border-radius: 16px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                    margin-bottom: 16px;
                }
                .welcome-card h2 { font-size: 24px; margin-bottom: 12px; color: var(--color-navy); }
                .welcome-card p { font-size: 14px; color: var(--color-gray-600); line-height: 1.5; margin-bottom: 20px; }
                .start-chat-btn {
                    width: 100%;
                    background: var(--color-navy);
                    color: white;
                    padding: 12px 20px;
                    border-radius: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 600;
                    transition: background 0.2s;
                }
                .start-chat-btn:hover { background: var(--color-navy-light); }

                .quick-links {
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
                }
                .quick-link {
                    width: 100%;
                    padding: 16px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 14px;
                    font-weight: 500;
                    color: var(--color-navy);
                    border-bottom: 1px solid #F3F4F6;
                    background: white;
                    transition: background 0.2s;
                }
                .quick-link:hover { background: #F9FAFB; }
                .quick-link:last-child { border-bottom: none; }

                /* Messages Tab */
                .empty-state {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 40px;
                }
                .empty-icon { color: var(--color-gray-300); margin-bottom: 16px; }
                .empty-state p { font-weight: 600; color: var(--color-navy); margin-bottom: 8px; }
                .empty-state span { font-size: 13px; color: var(--color-gray-500); }

                /* Help Tab */
                .help-search input {
                    width: 100%;
                    padding: 12px 16px;
                    border-radius: 12px;
                    border: 1px solid var(--color-gray-200);
                    margin-bottom: 20px;
                    font-size: 14px;
                    outline: none;
                }
                .help-articles { display: flex; flex-direction: column; gap: 12px; }
                .help-link {
                    padding: 12px 16px;
                    background: white;
                    border-radius: 10px;
                    font-size: 14px;
                    color: var(--color-hyros-blue);
                    font-weight: 500;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                }

                /* Footer / Tabs */
                .chat-footer {
                    background: white;
                    height: 72px;
                    border-top: 1px solid #E5E7EB;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    padding: 0 10px;
                }
                .tab-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                    color: var(--color-gray-400);
                    transition: color 0.2s;
                    background: none;
                    border: none;
                    flex: 1;
                }
                .tab-btn span { font-size: 11px; font-weight: 500; }
                .tab-btn.active { color: var(--color-navy); }
                .tab-btn:hover { color: var(--color-navy); }

                @media (max-width: 480px) {
                    .chat-window {
                        width: calc(100vw - 32px);
                        right: -10px;
                        height: calc(100vh - 80px);
                    }
                }
            `}</style>
        </div>
    );
}
