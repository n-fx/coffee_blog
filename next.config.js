/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
    domains: ['https://vercel.com/n-fx/coffee-blog'],
  },  
}

module.exports = nextConfig
