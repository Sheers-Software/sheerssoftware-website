import React from 'react';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import './Pages.css';

const PrivacyPolicy = () => {
    return (
        <PageLayout>
            <section className="section article-section" style={{ padding: '6rem 0', minHeight: '80vh' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="article-header"
                        style={{ marginBottom: '4rem' }}
                    >
                        <h1 className="page-title text-gradient" style={{ textAlign: 'left', marginBottom: '1rem' }}>Privacy Policy</h1>
                        <p style={{ color: 'var(--text-secondary)' }}>Last Updated: Feb 2026</p>
                    </motion.div>

                    <div className="article-body" style={{ color: 'var(--text-primary)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>1. Information Collection</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We collect personal data that you provide to us directly, such as your name, email address, phone number, and property details when you apply for our Founding Cohort or contact us.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. Use of Data</h3>
                        <ul style={{ marginBottom: '1.5rem', paddingLeft: '20px', color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Provide and maintain our Service</li>
                            <li style={{ marginBottom: '0.5rem' }}>Notify you about changes to our Service</li>
                            <li style={{ marginBottom: '0.5rem' }}>Allow you to participate in interactive features</li>
                            <li style={{ marginBottom: '0.5rem' }}>Provide customer support</li>
                            <li style={{ marginBottom: '0.5rem' }}>Gather analysis to improve our Service</li>
                            <li style={{ marginBottom: '0.5rem' }}>Monitor the usage of our Service</li>
                            <li style={{ marginBottom: '0.5rem' }}>Detect, prevent and address technical issues</li>
                        </ul>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Disclosure</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We may disclose your Personal Data in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend the rights or property of Sheers Software Sdn Bhd, prevent or investigate possible wrongdoing in connection with the Service, protect the personal safety of users of the Service or the public, or protect against legal liability.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>4. Service Providers</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>5. Security of Data</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>6. Access to Data (PDPA Rights)</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Under the PDPA, you have the right to access and correct your personal data. You may contact us at <strong>a.basyir@sheerssoft.com</strong> to request access to or correction of your data.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>7. Changes to This Privacy Policy</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>

                        <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>8. Contact Us</h3>
                        <p style={{ marginBottom: '1.5rem' }}>
                            If you have any questions about this Privacy Policy, please contact us by email: <strong>a.basyir@sheerssoft.com</strong>
                        </p>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default PrivacyPolicy;
