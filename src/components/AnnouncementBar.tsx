"use client";

export function AnnouncementBar({ isVisible, onDismiss }: { isVisible: boolean; onDismiss: () => void }) {
    if (!isVisible) return null;

    return (
        <div className="announcement-bar">
            <span>🔥 Now Accepting 5 Hotels Into Our Founding Cohort — 30 Days Free, Direct Founder Access</span>
            <a href="/apply" className="announcement-link">Apply →</a>
            <button
                onClick={onDismiss}
                className="announcement-close"
                aria-label="Dismiss announcement"
            >
                ✕
            </button>
        </div>
    );
}

