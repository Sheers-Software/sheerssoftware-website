import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Nocturn AI",
};

export default function PrivacyPage() {
    return (
        <section className="section section-white" style={{ paddingTop: 140, minHeight: "80vh" }}>
            <div className="container" style={{ maxWidth: 800 }}>
                <h1>Privacy Policy</h1>
                <p className="text-gray-600" style={{ marginTop: 20 }}>
                    Last Updated: Feb 2026
                </p>
                <div style={{ marginTop: 40, lineHeight: 1.8 }} className="text-gray-600">
                    <h3>1. Information Collection</h3>
                    <p style={{ marginBottom: 20 }}>
                        We collect personal data that you provide to us directly, such as your name, email address, phone number, and property details when you apply for our Founding Cohort or contact us.
                    </p>

                    <h3>2. Use of Data</h3>
                    <ul style={{ marginBottom: 20, listStyle: "disc", paddingLeft: 20 }}>
                        <li>Provide and maintain our Service</li>
                        <li>Notify you about changes to our Service</li>
                        <li>Allow you to participate in interactive features</li>
                        <li>Provide customer support</li>
                        <li>Gather analysis to improve our Service</li>
                        <li>Monitor the usage of our Service</li>
                        <li>Detect, prevent and address technical issues</li>
                    </ul>

                    <h3>3. Data Disclosure</h3>
                    <p style={{ marginBottom: 20 }}>
                        We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Sheers Software Sdn Bhd, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.
                    </p>

                    <h3>4. Service Providers</h3>
                    <p style={{ marginBottom: 20 }}>
                        We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                    </p>

                    <h3>5. Security of Data</h3>
                    <p style={{ marginBottom: 20 }}>
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>

                    <h3>6. Access to Data (PDPA Rights)</h3>
                    <p style={{ marginBottom: 20 }}>
                        Under the PDPA, you have the right to access and correct your personal data. You may contact us at a.basyir@sheerssoft.com to request access to or correction of your data.
                    </p>

                    <h3>7. Changes to This Privacy Policy</h3>
                    <p style={{ marginBottom: 20 }}>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>

                    <h3>8. Contact Us</h3>
                    <p style={{ marginBottom: 20 }}>
                        If you have any questions about this Privacy Policy, please contact us by email: a.basyir@sheerssoft.com
                    </p>
                </div>
            </div>
        </section>
    );
}
