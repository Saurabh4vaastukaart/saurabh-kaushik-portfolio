import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/case-studies/itrails",
        destination: "/case-studies/itrials",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
