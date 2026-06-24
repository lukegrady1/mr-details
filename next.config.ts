import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our placeholder art is trusted, first-party SVG served from /public.
    // Swap these for real raster photos (jpg/webp) when available.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
