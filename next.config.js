/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: 'edge',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ['your-domain.com'], // Add your image domains here
  },
  redirects: async () => [
    {
      source: "/liquor-liability-blk",
      destination: "/liquor-liability",
      permanent: false,
    },
    {
      source: "/builders-risk-blk",
      destination: "/builders-risk",
      permanent: false,
    },
    {
      source: "/commercial-property-blk",
      destination: "/commercial-property",
      permanent: false,
    },
  ],
  env: {
    SANITY_AUTH_TOKEN: process.env.SANITY_AUTH_TOKEN,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_DATASET: process.env.SANITY_DATASET,
    SANITY_API_VERSION: process.env.SANITY_API_VERSION,
    MAXMIND_ACCOUNT_ID: process.env.MAXMIND_ACCOUNT_ID,
    MAXMIND_LICENSE_KEY: process.env.MAXMIND_LICENSE_KEY,
    IMAGE_SOURCE: process.env.IMAGE_SOURCE,
  },
  async headers() {
    return [
      {
        // Apply these headers to all static assets
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache for 1 year
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

// In your index.js or any other SSR page
export async function getServerSideProps({ res }) {
  const homepageData = await fetchHomepageData();

  // Set cache headers for SSR pages
  res.setHeader("Cache-Control", "public, s-maxage=10, stale-while-revalidate=59");

  return {
    props: homepageData,
  };
}
