import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "graduate.mnums.edu.mn" },
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
    // Optimised images are immutable for a year, so a browser never re-requests
    // one. Vercel bills every revalidation round-trip as an Edge Request.
    minimumCacheTTL: 31536000,
  },

  async redirects() {
    return [
      // Handled here rather than in the proxy: config redirects are resolved at
      // the routing layer, so `/` costs no function invocation.
      // Keep in sync with `defaultLocale` in src/lib/i18n.ts.
      { source: "/", destination: "/mn", permanent: false },
    ];
  },

  async headers() {
    return [
      {
        // Files under public/ default to `max-age=0, must-revalidate` on Vercel,
        // which makes every page view re-request the logo and produce a 304.
        // A day of browser caching removes those round-trips while still letting
        // a replaced asset roll out within 24h. `_next/*` is excluded so Next's
        // own hashed assets keep their `immutable` header.
        source: "/:file((?!_next/).*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|woff2?))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
