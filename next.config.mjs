import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedForwardedHosts: [
        'localhost',
        'pingua-cms.latinary.com',
        'pingua-api.latinary.com',
        'pingua_cms',
        '*.latinary.com',
      ],
      allowedOrigins: [
        'http://localhost:3000',
        'https://pingua-cms.latinary.com',
        'https://pingua-api.latinary.com',
        'https://pingua.latinary.com',
      ],
    },
  },
};

export default withPayload(nextConfig);
