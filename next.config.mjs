/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — the deck is fully static, so it can be served by plain
  // nginx (aiot-cybersecurity.tesaiot.dev) without a Node runtime.
  output: 'export',
  // The slide markup is validated, hand-tuned design HTML injected as-is,
  // so we don't gate the build on lint over generated fragments.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
