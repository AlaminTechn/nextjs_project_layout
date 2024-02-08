/** @type {import('next').NextConfig} */
const nextConfig = {

      output : 'standalone', //This will create a folder at .next/standalone which can then be deployed on its own without installing node_modules.
      // reactStrictMode:true
};

export default nextConfig;
