const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["https://img-proxy-moc9.onrender.com"],
  },
};

module.exports = withPWA(nextConfig);
