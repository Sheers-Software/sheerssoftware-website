"use client";

import { useEffect, useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Navbar } from "./Navbar";

export function Header() {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const dismissed = localStorage.getItem("nocturn-announcement-dismissed-v1");
        if (dismissed && new Date(dismissed) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)) {
            setIsBannerVisible(false);
        }
    }, []);

    const handleDismiss = () => {
        setIsBannerVisible(false);
        localStorage.setItem("nocturn-announcement-dismissed-v1", new Date().toISOString());
    };

    // Prevent hydration mismatch
    if (!isMounted) return null;

    return (
        <header style={{
            position: "sticky",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            display: "flex",
            flexDirection: "column"
        }}>
            <AnnouncementBar isVisible={isBannerVisible} onDismiss={handleDismiss} />
            <div style={{ position: "relative", width: "100%" }}>
                <Navbar className={!isBannerVisible ? "navbar-top" : ""} />
            </div>
        </header>
    );
}
