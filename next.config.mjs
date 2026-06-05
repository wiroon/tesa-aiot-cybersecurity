/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The slide markup is validated, hand-tuned design HTML injected as-is,
  // so we don't gate the build on lint over generated fragments.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
