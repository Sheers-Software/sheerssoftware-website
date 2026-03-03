"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const data = {
            hotelNameAndLocation: formData.get("hotelNameAndLocation"),
            roomCount: formData.get("roomCount"),
            currentHandling: formData.get("currentHandling"),
            whatsapp: formData.get("whatsapp"),
        };

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to submit application");
            }

            // Redirect to thank you
            router.push("/thank-you");
        } catch (err: any) {
            console.error(err);
            setErrorMsg(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="section section-white" style={{ minHeight: "100vh", paddingTop: 100 }}>
                <div className="container">
                    <div className="apply-grid">
                        {/* Left Column: Value */}
                        <div>
                            <h1 style={{ marginBottom: 24 }}>5 Hotels. 30 Days Free. We Handle Everything.</h1>
                            <p style={{ fontSize: "var(--fs-large)", color: "var(--color-gray-600)", marginBottom: 40 }}>
                                Tell us about your property. Basyir will personally WhatsApp you within 2 hours.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                <CheckItem title="FULL PRODUCT ACCESS" desc="WhatsApp AI + Email + Web Chat + Dashboard. Not a limited trial." />
                                <CheckItem title="48-HOUR SETUP" desc="We handle everything. Your team spends 30 minutes total." />
                                <CheckItem title="DIRECT FOUNDER LINE" desc="WhatsApp group with Basyir. Bugs fixed in hours." />
                                <CheckItem title="ZERO RISK" desc="No credit card. No contracts. If it doesn't work, you walk away." />
                            </div>

                            <div style={{ marginTop: 40, paddingTop: 40, borderTop: "1px solid var(--color-gray-200)", display: "flex", gap: 24, flexWrap: "wrap" }}>
                                <TrustItem icon="🏢" text="SSM Registered" />
                                <TrustItem icon="🔒" text="PDPA Compliant" />
                                <TrustItem icon="🇲🇾" text="Built in Malaysia" />
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div style={{ background: "var(--color-gray-50)", padding: 40, borderRadius: 24 }}>
                            <h2 style={{ marginBottom: 24, fontSize: 24 }}>Tell Us About Your Property</h2>
                            {errorMsg && (
                                <div style={{ color: "red", background: "#fee2e2", padding: "12px", borderRadius: "8px", marginBottom: "16px", fontSize: "14px" }}>
                                    {errorMsg}
                                </div>
                            )}
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                                <InputGroup name="hotelNameAndLocation" label="Hotel name + city" type="text" required placeholder="e.g., Grand Seasons Hotel, Kuala Lumpur" />
                                <InputGroup name="roomCount" label="Number of rooms" type="select" options={["<30", "30-50", "50-150", "150+"]} required />
                                <InputGroup name="currentHandling" label="Current after-hours process" type="select" options={[
                                    "WhatsApp/calls only, often missed",
                                    "Someone on call but inconsistent",
                                    "We have a system but it's not working",
                                    "We miss most after-hours inquiries"
                                ]} required />
                                <InputGroup name="whatsapp" label="Your WhatsApp number" type="tel" required placeholder="+60..." />

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg"
                                    style={{ width: "100%", justifyContent: "center" }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application →"}
                                </button>
                                <p style={{ fontSize: 13, marginTop: 16, color: "var(--color-navy)", background: "white", padding: 16, borderRadius: 8, border: "1px solid var(--color-gray-200)" }}>
                                    <strong>After you apply</strong>, Basyir will personally WhatsApp you within 2 hours. No sales pitch. Just a honest conversation about whether Nocturn AI fits your property.
                                </p>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}>
                                    <img src="/Basyir.png" alt="Ahmad Basyir Azahari" style={{ width: 40, height: 40, borderRadius: "50%", objectFit: "cover" }} />
                                    <div style={{ fontSize: 14, color: "var(--color-gray-600)" }}>
                                        <strong style={{ color: "var(--color-navy)", display: "block" }}>Ahmad Basyir Azahari</strong>
                                        Founder
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function CheckItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div>
            <div style={{ fontWeight: 700, fontSize: 14, color: "var(--color-navy)", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "var(--color-green)" }}>✓</span> {title}
            </div>
            <div style={{ fontSize: 14, color: "var(--color-gray-600)", paddingLeft: 20 }}>{desc}</div>
        </div>
    );
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "var(--color-gray-600)" }}>
            <span>{icon}</span> {text}
        </div>
    );
}

function InputGroup({ name, label, type, required = false, options, placeholder }: { name: string; label: string; type: string; required?: boolean; options?: string[]; placeholder?: string }) {
    return (
        <div className="form-group">
            <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: 14 }}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
            </label>
            {type === "select" ? (
                <select name={name} className="input-field" required={required} style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid var(--color-gray-300)" }}>
                    <option value="">Select...</option>
                    {options?.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
            ) : (
                <input
                    name={name}
                    type={type}
                    required={required}
                    placeholder={placeholder}
                    className="input-field"
                    style={{ width: "100%", padding: 12, borderRadius: 8, border: "1px solid var(--color-gray-300)" }}
                />
            )}
        </div>
    );
}
