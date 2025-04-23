import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["avatars.githubusercontent.com"],
    //     remotePatterns: [
    //       {
    //         protocol: "https",
    //         hostname: "example.com", // Replace with the hostname of the remote image source
    //         port: "", // Optional: specify a port if needed
    //         pathname: "/path/to/images/**", // Replace with the path pattern for the images
    //       },
    //     ],
      },
};

export default nextConfig;
