/** @type {import('next').NextConfig} */

const NextFederationPlugin = require("@module-federation/nextjs-mf");

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:function*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
  swcMinify: true,
  output: "standalone",
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
    styledComponents: true,
  },
  experimental: {
    serverActions: true,
  },
  basePath: "/_transaction",
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "ebfetransactions",
          filename: "static/chunks/remoteEntry.js",
          remotes: {},
          exposes: {
            "./prueba": "./src/pages/prueba/index.tsx",
            "./redux": "./src/pages/index.tsx",
            "./leer": "./src/pages/leer/index.tsx",
            "./escribir": "./src/pages/escribir/index.tsx",
            useSelector: "react-redux",
          },
          shared: {
            "react-redux": {},
          },
          extraOptions: {
            exposePages: true,
          },
        })
      );
    }

    return config;
  },
};
