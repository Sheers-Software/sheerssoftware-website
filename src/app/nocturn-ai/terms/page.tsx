import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | Nocturn AI",
};

export default function TermsPage() {
    return (
        <section className="section section-white" style={{ paddingTop: 140, minHeight: "80vh" }}>
            <div className="container" style={{ maxWidth: 800 }}>
                <h1>Terms of Service</h1>
                <p className="text-gray-600" style={{ marginTop: 20 }}>
                    Last Updated: Feb 2026
                </p>
                <div style={{ marginTop: 40, lineHeight: 1.8 }} className="text-gray-600">
                    <h3>1. Acceptance of Terms</h3>
                    <p style={{ marginBottom: 20 }}>
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>

                    <h3>2. Description of Service</h3>
                    <p style={{ marginBottom: 20 }}>
                        Nocturn AI provides AI-powered inquiry response and management tools for hotels. The Service connects to your communication channels (WhatsApp, Email, Website) to automate responses.
                    </p>

                    <h3>3. Accounts</h3>
                    <p style={{ marginBottom: 20 }}>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>

                    <h3>4. Intellectual Property</h3>
                    <p style={{ marginBottom: 20 }}>
                        The Service and its original content, features and functionality are and will remain the exclusive property of Sheers Software Sdn Bhd and its licensors. The Service is protected by copyright, trademark, and other laws of both Malaysia and foreign countries.
                    </p>

                    <h3>5. Limitation of Liability</h3>
                    <p style={{ marginBottom: 20 }}>
                        In no event shall Sheers Software Sdn Bhd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                    </p>

                    <h3>6. Governing Law</h3>
                    <p style={{ marginBottom: 20 }}>
                        These Terms shall be governed and construed in accordance with the laws of Malaysia, without regard to its conflict of law provisions.
                    </p>

                    <h3>7. Changes</h3>
                    <p style={{ marginBottom: 20 }}>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p style={{ marginBottom: 20 }}>
                        If you have any questions about these Terms, please contact us at a.basyir@sheerssoft.com
                    </p>
                </div>
            </div>
        </section>
    );
}
