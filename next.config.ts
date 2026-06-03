import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: '/apply',
        destination: '/nocturn-ai/apply',
        permanent: true,
      },
      {
        source: '/how-it-works',
        destination: '/nocturn-ai/how-it-works',
        permanent: true,
      },
      {
        source: '/pilot',
        destination: '/nocturn-ai/pilot',
        permanent: true,
      },
      {
        source: '/audit',
        destination: '/nocturn-ai/audit',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/nocturn-ai',
        permanent: true,
      },
      {
        source: '/book-demo',
        destination: '/nocturn-ai/apply',
        permanent: true,
      },
      {
        source: '/case-studies',
        destination: '/solutions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
