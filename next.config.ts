import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", hostname: "res.cloudinary.com", pathname: "/dnt0n1odp/image/upload/**",},
      {
        protocol: "https",
        hostname: "vita-voice-backend.onrender.com", pathname: "/uploads/**" },
    ],
  },
};

export default nextConfig;
