/** @type {import('next').NextConfig} */
const nextConfig = {
  // 10. Do not expose source maps in production
  productionBrowserSourceMaps: false,

  // 12. Strip console logs from client bundles in production
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error"], // preserve critical runtime error tracking while dropping logs & debug statements
          }
        : false,
  },

  // Security and SEO headers
  poweredByHeader: false,
};

export default nextConfig;
