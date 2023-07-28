/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  images: {
    remotePatterns: [
      // nextjs Image config for running on localhost
      // {
      //   protocol: 'http', 
      //   hostname: 'localhost',
      //   port: '1337',
      //   pathname: '/uploads/**'
      // },
      // next Image config for running Vercel
      {
        protocol: "https",
        hostname: "**.digitaloceanspaces.com",
        port: '',
      },
    ],
  },
};
