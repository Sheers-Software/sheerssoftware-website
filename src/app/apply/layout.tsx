import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Apply for Founding Cohort | Nocturn AI",
    description: "Apply for the Founding Cohort. 5 spots available for Malaysian hotels. 30 days free, direct founder access. Application takes 2 minutes.",
    openGraph: {
        title: "Apply for Founding Cohort | Nocturn AI",
        description: "Apply for the Founding Cohort. 5 spots available for Malaysian hotels. 30 days free, direct founder access.",
        url: "https://sheerssoft.com/apply",
    },
    twitter: {
        card: "summary_large_image",
        title: "Apply for Founding Cohort | Nocturn AI",
        description: "Apply for the Founding Cohort. 5 spots available for Malaysian hotels. 30 days free, direct founder access.",
    },
};

export default function ApplyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
