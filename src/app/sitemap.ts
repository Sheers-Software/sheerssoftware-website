import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://sheerssoft.com";

    const corporatePaths = [
        { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/services/web-design`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/career`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${baseUrl}/blog/why-ai-is-the-future`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${baseUrl}/blog/maximizing-adr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
        { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    ];

    const nocturnPaths = [
        { url: `${baseUrl}/nocturn-ai`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
        { url: `${baseUrl}/nocturn-ai/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/nocturn-ai/apply`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/nocturn-ai/audit`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/nocturn-ai/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
        { url: `${baseUrl}/nocturn-ai/how-it-works`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
        { url: `${baseUrl}/nocturn-ai/pilot`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
        { url: `${baseUrl}/nocturn-ai/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
        { url: `${baseUrl}/nocturn-ai/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    ];

    return [...corporatePaths, ...nocturnPaths];
}
