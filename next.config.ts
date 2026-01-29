import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If you are deploying to a GitHub Pages Project site (e.g. username.github.io/repo-name),
  // you must uncomment the line below and replace 'repo-name' with your repository name.
  basePath: "/lino",
};

export default nextConfig;
