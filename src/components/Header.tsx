"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";

export function Header() {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/" || pathname === "";

    useEffect(() => {
        setIsMounted(true);
        const dismissed = localStorage.getItem("nocturn-announcement-dismissed-v1");
        if (dismissed && new Date(dismissed) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
            setIsBannerVisible(false);
        }

        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleDismiss = () => {
        setIsBannerVisible(false);
        localStorage.setItem("nocturn-announcement-dismissed-v1", new Date().toISOString());
    };

    return (
        <header className="site-header" style={{
            position: isHome ? "absolute" : "relative",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            background: isHome ? "transparent" : "white",
            minHeight: isMounted ? 'auto' : '80px' // Placeholder height
        }}>
            {isMounted && (
                <>
                    <AnnouncementBar isVisible={isBannerVisible} onDismiss={handleDismiss} />
                    <Navbar />
                </>
            )}
        </header>
    );
}
