import React, { useEffect, useRef } from "react";

export function HubSpotMeeting() {
    const containerRef = useRef(null);

    useEffect(() => {
        // Load HubSpot meetings script dynamically
        const script = document.createElement("script");
        script.src = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
        script.async = true;

        // Ensure the script appends correctly and the embed works
        if (containerRef.current) {
            containerRef.current.appendChild(script);
        }

        return () => {
            if (containerRef.current && containerRef.current.contains(script)) {
                containerRef.current.removeChild(script);
            }
        };
    }, []);

    return (
        <div ref={containerRef}>
            <div
                className="meetings-iframe-container"
                data-src="https://meetings-na2.hubspot.com/ahmad-basyir/nocturn-ai-discovery-meeting?embed=true"
                style={{ width: "100%", minHeight: "700px" }}
            ></div>
        </div>
    );
}
