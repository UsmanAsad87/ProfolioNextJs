/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/work/homehealth", destination: "/work/ai-care-platform", permanent: true }]
  },
}

export default nextConfig
