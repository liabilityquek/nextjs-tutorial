/** @type {import('next').NextConfig} */
module.exports = {
  // output: 'export',
  images: {
    remotePatterns: [
      // {
      //   protocol: 'http', 
      //   hostname: 'localhost',
      //   port: '1337',
      //   pathname: '/uploads/**'
      // },
      {
        protocol: "https",
        hostname: "**.digitaloceanspaces.com",
        port: '',
      },
    ],
  },
};

// module.exports = {
//   images: {
//     loader: 'custom',
//     loaderFile: './loader.js',
//   },

