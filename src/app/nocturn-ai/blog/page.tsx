import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hotel Revenue Recovery Blog — Insights for Hoteliers | Nocturn AI",
    description: "Data-backed articles on capturing more direct bookings, reducing OTA dependency, and using AI to recover lost revenue.",
};

export default function BlogPage() {
    return (
        <section className="section section-white" style={{ paddingTop: 140, minHeight: "100vh" }}>
            <div className="container">
                <div style={{ textAlign: "center", marginBottom: 60 }}>
                    <span className="eyebrow">BLOG & INSIGHTS</span>
                    <h1 style={{ marginTop: 12 }}>Insights for Hotel Revenue Leaders</h1>
                    <p style={{ fontSize: "var(--fs-large)", color: "var(--color-gray-600)", maxWidth: 600, margin: "16px auto 0" }}>
                        Data-backed articles on capturing more direct bookings, reducing OTA dependency, and using AI to recover lost revenue.
                    </p>
                </div>

                <div style={{ padding: "40px", background: "var(--color-gray-50)", borderRadius: 16, textAlign: "center" }}>
                    <h3 style={{ marginBottom: 16 }}>Articles Coming Soon</h3>
                    <p className="text-gray-600">
                        We are currently compiling our research from months of operator interviews.
                        <br />Check back for deep dives into OTA commissions, after-hours inquiry loss, and more.
                    </p>
                    <div style={{ marginTop: 24 }}>
                        <a href="/nocturn-ai" className="btn btn-outline">Return Home</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
