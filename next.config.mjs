import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'pingua-cms.latinary.com',
        'pingua-api.latinary.com',
        'pingua.latinary.com',
        '*.latinary.com',
      ],
    },
  },
};

export default withPayload(nextConfig);
