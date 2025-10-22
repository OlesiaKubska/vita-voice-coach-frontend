import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "vita-voice-backend.onrender.com"],
    remotePatterns: [
      {
        protocol: "http", hostname: "res.cloudinary.com"},
      {
        protocol: "https",
        hostname: "vita-voice-backend.onrender.com" },
    ],
  },
};

export default nextConfig;
