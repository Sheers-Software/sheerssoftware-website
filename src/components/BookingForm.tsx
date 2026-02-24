"use client";

import { useState, FormEvent, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function BookingFormInner() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // TODO: Replace with actual HubSpot Forms API submission
        console.log("Form submitted:", data);

        setTimeout(() => {
            router.push("/book-demo/thank-you");
        }, 1000);
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Hidden Context Fields */}
            <input type="hidden" name="utm_source" value={searchParams.get("utm_source") || ""} />
            <input type="hidden" name="utm_medium" value={searchParams.get("utm_medium") || ""} />
            <input type="hidden" name="utm_campaign" value={searchParams.get("utm_campaign") || ""} />

            <div>
                <label htmlFor="name" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                    Full Name
                </label>
                <input
                    type="text" id="name" name="name" required
                    placeholder="Ahmad Razak"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14, transition: "border-color 0.2s" }}
                />
            </div>
            <div>
                <label htmlFor="email" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                    Work Email
                </label>
                <input
                    type="email" id="email" name="email" required
                    placeholder="ahmad@hotelgrand.com"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                />
            </div>
            <div>
                <label htmlFor="property" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                    Property Name
                </label>
                <input
                    type="text" id="property" name="property" required
                    placeholder="Hotel Grand Kuala Lumpur"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                />
            </div>
            <div>
                <label htmlFor="rooms" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                    Number of Rooms
                </label>
                <select
                    id="rooms" name="rooms"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14, background: "white" }}
                >
                    <option value="">Select range</option>
                    <option value="<50">&lt; 50 rooms</option>
                    <option value="50-100">50 - 100 rooms</option>
                    <option value="100-200">100 - 200 rooms</option>
                    <option value="200-300">200 - 300 rooms</option>
                    <option value="300+">300+ rooms</option>
                </select>
            </div>
            <div>
                <label htmlFor="phone" style={{ display: "block", fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
                    Phone / WhatsApp
                </label>
                <input
                    type="tel" id="phone" name="phone"
                    placeholder="+60 12 345 6789"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 8, border: "2px solid var(--color-gray-200)", fontSize: 14 }}
                />
            </div>
            <button
                type="submit"
                disabled={isLoading}
                className="btn btn-primary btn-lg"
                style={{ width: "100%", marginTop: 8, opacity: isLoading ? 0.7 : 1 }}
            >
                {isLoading ? "Booking..." : "Book My Free Demo →"}
            </button>
        </form>
    );
}

export function BookingForm() {
    return (
        <Suspense fallback={<div>Loading form...</div>}>
            <BookingFormInner />
        </Suspense>
    );
}
