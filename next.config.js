/** @type {import('next').NextConfig} */
// module.exports = {
//   // output: 'export',
//   images: {
//     remotePatterns: [
//       // {
//       //   protocol: 'http', 
//       //   hostname: 'localhost',
//       //   port: '1337',
//       //   pathname: '/uploads/**'
//       // },
//       {
//         protocol: 'https',
//         hostname: 'next-cms-strapi-spaces.sgp1.digitaloceanspaces.com',
//         port: '',
//         pathname: '//next-cms-strapi-spaces.sgp1.digitaloceanspaces.com/**'
//       },
//     ],
//   },
// };

module.exports = {
  images: {
    loader: 'custom',
    loaderFile: 'my/image/loader',
  },
}
