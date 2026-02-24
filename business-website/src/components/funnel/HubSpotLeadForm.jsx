import React, { useEffect } from "react";

export function HubSpotLeadForm({ onFormSubmit }) {
    useEffect(() => {
        const handleMessage = (event) => {
            if (
                event.data.type === "hsFormCallback" &&
                event.data.eventName === "onFormSubmitted"
            ) {
                if (onFormSubmit) onFormSubmit();
            }
        };

        window.addEventListener("message", handleMessage);
        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [onFormSubmit]);

    useEffect(() => {
        // Load HubSpot form script dynamically
        const script = document.createElement("script");
        script.src = "https://js-na2.hsforms.net/forms/embed/v2.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na2",
                    portalId: "243983306",
                    formId: "403564c4-547b-4907-a1a7-dd6b0e8ad6ea",
                    target: "#hubspot-form-container",
                });
            }
        };

        return () => {
            // Cleanup script if needed
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="card" style={{ padding: "2rem", width: "100%" }}>
            <div id="hubspot-form-container"></div>
        </div>
    );
}
