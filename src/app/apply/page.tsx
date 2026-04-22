"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "@/app/home.css";

export default function ApplyPage() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMsg("");

        const formData = new FormData(e.currentTarget);
        const searchParams = new URLSearchParams(window.location.search);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            property: formData.get("property"),
            rooms: formData.get("rooms"),
            phone: formData.get("phone"),
            currentHandling: formData.get("currentHandling"),
            utm_source: searchParams.get("utm_source"),
            utm_medium: searchParams.get("utm_medium"),
            utm_campaign: searchParams.get("utm_campaign"),
        };

        try {
            const res = await fetch("/api/submit-apply", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const json = await res.json();
                throw new Error(json.error || "Failed to submit application");
            }

            router.push("/apply/thank-you");
        } catch (err: any) {
            console.error(err);
            setErrorMsg(err.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="nocturn-v2">
            <section className="section section-white" id="audit" style={{ minHeight: "100vh", paddingTop: 160 }}>
                <div className="container">
                    <div className="apply-grid">
                        {/* Left Column: Value */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="eyebrow" style={{ textAlign: 'left' }}>START 48-HOUR IMPLEMENTATION</span>
                            <h1 style={{ marginBottom: 32, fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-serif)', lineHeight: 1.1 }}>
                                Stop Paying 18%.<br />
                                Start at 3%.
                            </h1>
                            <p style={{ fontSize: "1.25rem", color: "var(--color-gray-500)", marginBottom: 48, maxWidth: 600 }}>
                                Tell us about your property. Ahmad Basyir will personally WhatsApp you within 2 hours to confirm your onboarding timeline.
                            </p>

                            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                                <CheckItem title="RM999 ONE-TIME SETUP" desc="Full AI training on your property. WhatsApp + Email + Web. Live in 48 hours." />
                                <CheckItem title="RM199/MONTH PLATFORM" desc="Unlimited channels, dashboard, GM Morning Report, follow-up engine." />
                                <CheckItem title="3% PERFORMANCE FEE" desc="Only on confirmed bookings Nocturn AI helped close. You keep the other 15%." />
                                <CheckItem title="30-DAY GUARANTEE" desc="Measurable revenue recovery in 30 days or we waive the next month." />
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div 
                            className="apply-form-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 style={{ marginBottom: 32, fontSize: "1.75rem", fontFamily: 'var(--font-serif)', textAlign: 'left' }}>Tell Us About Your Property</h2>
                            
                            {errorMsg && (
                                <div style={{ color: "var(--color-red)", background: "#FEF2F2", padding: "16px", borderRadius: "12px", marginBottom: "24px", fontSize: "14px", border: '1px solid #FCA5A5' }}>
                                    {errorMsg}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                <InputGroup name="name" label="Full Name" type="text" required placeholder="Ahmad Basyir" />
                                <InputGroup name="email" label="Work Email" type="email" required placeholder="director@hotel.com" />
                                <InputGroup name="property" label="Hotel Name + City" type="text" required placeholder="e.g., Grand Seasons Hotel, Kuala Lumpur" />
                                <InputGroup name="rooms" label="Number of Rooms" type="select" options={["<30", "30-50", "50-150", "150+"]} required />
                                <InputGroup name="currentHandling" label="Current After-Hours Process" type="select" options={[
                                    "WhatsApp/calls only, often missed",
                                    "Someone on call but inconsistent",
                                    "We have a system but it's not working",
                                    "We miss most after-hours inquiries"
                                ]} required />
                                <InputGroup name="phone" label="Your WhatsApp Number" type="tel" required placeholder="+60..." />

                                <button
                                    type="submit"
                                    className="btn btn-solid-green btn-lg"
                                    style={{ width: "100%", justifyContent: "center", marginTop: 12 }}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Submitting..." : "Submit Application →"}
                                </button>
                                
                                <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, paddingTop: 24, borderTop: '1px solid var(--color-gray-100)' }}>
                                    <img src="/Basyir.png" alt="Ahmad Basyir Azahari" style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: '2px solid var(--color-green-light)' }} />
                                    <div style={{ fontSize: 13, color: "var(--color-gray-500)" }}>
                                        <div style={{ color: "var(--color-navy)", fontWeight: 700 }}>Ahmad Basyir Azahari</div>
                                        Founder
                                    </div>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function CheckItem({ title, desc }: { title: string; desc: string }) {
    return (
        <div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', color: "var(--color-navy)", display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
                <span style={{ color: "var(--color-green)", fontSize: '1.2rem' }}>✓</span> {title}
            </div>
            <div style={{ fontSize: '1rem', color: "var(--color-gray-500)", paddingLeft: 24, lineHeight: 1.5 }}>{desc}</div>
        </div>
    );
}

function InputGroup({ name, label, type, required = false, options, placeholder }: { name: string; label: string; type: string; required?: boolean; options?: string[]; placeholder?: string }) {
    return (
        <div className="form-group">
            <label style={{ display: "block", marginBottom: 10, fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-navy)' }}>
                {label} {required && <span style={{ color: "var(--color-red)" }}>*</span>}
            </label>
            {type === "select" ? (
                <select name={name} className="input-field" required={required}>
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
                />
            )}
        </div>
    );
}
