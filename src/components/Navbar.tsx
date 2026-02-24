export function Navbar({ className }: { className?: string }) {
    return (
        <nav className={`navbar ${className || ""}`} id="navbar">
            <div className="container navbar-inner">
                <a href="/" className="navbar-logo" aria-label="Nocturn AI Home">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                        <circle cx="16" cy="16" r="14" stroke="#22C55E" strokeWidth="2.5" />
                        <path d="M16 6C10.5 6 8 12 8 16c0 4 2.5 10 8 10 -3-2-4.5-5.5-4.5-10S13 8 16 6z" fill="#22C55E" />
                    </svg>
                    <span className="navbar-brand">Nocturn AI</span>
                </a>

                <div className="navbar-links hide-mobile">
                    <a href="https://sheerssoft.com" style={{ color: "var(--color-gray-500)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        SheersSoft
                    </a>
                    <a href="/how-it-works">How It Works</a>
                    <a href="/pilot">Pilot Program</a>
                    <a href="/about">About</a>
                    <a href="/blog">Blog</a>
                </div>

                <a href="/apply" className="btn btn-primary navbar-cta hide-mobile">
                    Apply for Pilot →
                </a>

                <button
                    className="navbar-hamburger hide-desktop"
                    aria-label="Open navigation menu"
                    id="nav-toggle"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className="navbar-mobile-menu hide-desktop" id="mobile-menu">
                <a href="https://sheerssoft.com" style={{ color: "var(--color-gray-500)" }}>← Back to SheersSoft</a>
                <a href="/how-it-works">How It Works</a>
                <a href="/pilot">Pilot Program</a>
                <a href="/about">About</a>
                <a href="/blog">Blog</a>
                <div style={{ height: 1, background: "var(--color-gray-200)", margin: "8px 0" }}></div>
                <a href="/apply" className="btn btn-primary" style={{ width: "100%", marginTop: 8 }}>
                    Apply for Founding Cohort →
                </a>
            </div>
        </nav>
    );
}
