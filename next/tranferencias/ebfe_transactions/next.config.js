/** @type {import('next').NextConfig} */
var path = require('path')

 
const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  output:'standalone',
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    const location = isServer ? 'ssr' : 'chunks'
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'ebfetransactions',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            remote: `app1@http://localhost:3000/_next/static/${location}/remoteEntry.js`
          },
          exposes: {
             
            './prueba': './src/pages/prueba.tsx' ,
          },
          shared: {},
        }),
      );
    }

    return config;
  },
};           

