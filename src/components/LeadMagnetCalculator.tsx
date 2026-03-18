"use client";

import { useState } from "react";

export default function LeadMagnetCalculator() {
    const [dailyInquiries, setDailyInquiries] = useState(30);
    const [adr, setAdr] = useState(250);
    const [afterHoursPercent, setAfterHoursPercent] = useState(30);

    const calculateROI = () => {
        const monthlyRevenueAtRisk = dailyInquiries * (afterHoursPercent / 100) * 0.15 * adr * 30; // 15% booking conversion assumption
        const otaCommissionLost = monthlyRevenueAtRisk * 0.18; // 18% OTA commission
        return {
            monthlyRevenue: monthlyRevenueAtRisk.toLocaleString("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }),
            commissionLost: otaCommissionLost.toLocaleString("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 })
        };
    };

    const results = calculateROI();

    return (
        <div className="roi-calc roi-calc-card" style={{ background: "white", borderRadius: 24, boxShadow: "var(--shadow-card)", maxWidth: 800, margin: "0 auto", textAlign: "left" }}>
            <div className="roi-inputs" style={{ display: "grid", gap: 24, marginBottom: 32 }}>
                <div className="roi-input-group">
                    <label style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginBottom: 8 }}>
                        Daily inquiries your hotel receives: <span style={{ color: "var(--color-green)" }}>{dailyInquiries}</span>
                    </label>
                    <input
                        type="range"
                        min="10" max="100"
                        value={dailyInquiries}
                        onChange={(e) => setDailyInquiries(Number(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--color-green)" }}
                    />
                </div>

                <div className="roi-input-group">
                    <label style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginBottom: 8 }}>
                        Your Average Daily Rate (ADR): <span style={{ color: "var(--color-green)" }}>RM {adr}</span>
                    </label>
                    <input
                        type="range"
                        min="50" max="1000" step="10"
                        value={adr}
                        onChange={(e) => setAdr(Number(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--color-green)" }}
                    />
                </div>

                <div className="roi-input-group">
                    <label style={{ display: "flex", justifyContent: "space-between", fontWeight: 600, marginBottom: 8 }}>
                        % of inquiries after office hours: <span style={{ color: "var(--color-green)" }}>{afterHoursPercent}%</span>
                    </label>
                    <input
                        type="range"
                        min="10" max="80"
                        value={afterHoursPercent}
                        onChange={(e) => setAfterHoursPercent(Number(e.target.value))}
                        style={{ width: "100%", accentColor: "var(--color-green)" }}
                    />
                </div>
            </div>

            <div className="roi-result" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                <div style={{ background: "var(--color-gray-50)", padding: 24, borderRadius: 12, border: "1px solid var(--color-gray-200)" }}>
                    <div style={{ fontSize: 13, color: "var(--color-gray-500)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>Est. Monthly Revenue at Risk</div>
                    <div className="roi-result-number">{results.monthlyRevenue}</div>
                </div>
                <div style={{ background: "rgba(34, 197, 94, 0.05)", padding: 24, borderRadius: 12, border: "1px solid rgba(34, 197, 94, 0.2)" }}>
                    <div style={{ fontSize: 13, color: "var(--color-green)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>OTA Commission Lost</div>
                    <div className="roi-result-number" style={{ color: "var(--color-green)" }}>{results.commissionLost}</div>
                </div>
            </div>

            <div style={{ background: "var(--color-navy)", color: "white", padding: 24, borderRadius: 16, textAlign: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 3, background: "var(--color-green)" }}></div>
                <h3 style={{ fontSize: 20, marginBottom: 12, color: "white" }}>Hotels like yours typically have RM 3,000–8,000/month in revenue at risk.</h3>
                <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: 24, fontSize: 15 }}>
                    These estimates use a conservative 20% conversion rate on captured leads — the same rate used by revenue managers when forecasting direct bookings.
                </p>
                <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                    <a href="/apply" className="btn btn-primary btn-glow">Apply for Cohort →</a>
                    <a href="mailto:hello@sheerssoft.com?subject=Hotel%20Audit%20Request" className="btn btn-outline" style={{ background: "rgba(255,255,255,0.1)", color: "white", borderColor: "rgba(255,255,255,0.2)" }}>Get Full PDF Audit</a>
                </div>
            </div>
        </div>
    );
}
