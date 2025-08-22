/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // tambah breakpoint besar agar Next bisa melayani gambar tajam di layar lebar
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3200, 3840, 4624],
  },
}
export default nextConfig
