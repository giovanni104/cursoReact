
const { constants } = require('buffer');
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
//const HtmlWebPackPlugin = require("html-webpack-plugin");
//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
//var Dotenv = require('dotenv-webpack')
var path = require('path')
const deps = require("./package.json").dependencies;
const { dependencies } = require("./package.json");
const  envs=require("./.env.json")
var queryDomain=envs.QUERY_DOMAIN; 
var transferDomain=envs.TRANSFER_DOMAIN;
console.log('transferDomain',transferDomain)

const imagesConfig = {
  test: /\.(png|svg|jpe?g|gif)$/,
  include: /images/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: 'images/'
      }
    }
  ]
}

//Se reemplazara babel con nextjs SWC->(Speedy Web Compiler)
//embebido desde la version 12 de nextjs

const config1={
  test: /\.m?js/,
  type: "javascript/auto",
  resolve: {
    fullySpecified: false,
  }
}

const configCss = {
  test: /\.(css|s[ac]ss)$/i,
  use: ["style-loader", "css-loader", "postcss-loader"],
}

const DEFAULT_SHARE_SCOPE = {
  react: {
    singleton: true,
    requiredVersion: false,
  },
  'react/': {
    singleton: true,
    requiredVersion: false,
  },
  'react-dom': {
    singleton: true,
    requiredVersion: false,
  },
  'next/dynamic': {
    requiredVersion: false,
    singleton: true,
  },
  'styled-jsx': {
    requiredVersion: false,
    singleton: true,
  },
  'styled-jsx/style': {
    requiredVersion: false,
    singleton: true,
  },
  'next/link': {
    requiredVersion: false,
    singleton: true,
  },
  'next/router': {
    requiredVersion: false,
    singleton: true,
  },
  'next/script': {
    requiredVersion: false,
    singleton: true,
  },
  'next/head': {
    requiredVersion: false,
    singleton: true,
  },
}

module.exports = {
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['log'],
    },
  },
  webpack: (config, options) => {
    const { buildId, dev, isServer, defaultLoaders, webpack } = options;
    config.resolve.extensions.push('.ts', '.tsx' ,'.js', '.json','...');
    Object.assign(config.experiments, { topLevelAwait: true });
    

    config.module.rules.push(imagesConfig);    
    config.module.rules.push(config1);
    
    //config.module.rules.push(configCss);    
    const { ModuleFederationPlugin } = options.webpack.container;
    const location = isServer ? "ssr" : "chunks";
      config.plugins.push(
      new NextFederationPlugin({
        name: 'app1',
        remotes: {
          app2: `app2@http://localhost:2000/_next/static/${location}/remoteEntry.js`,          
          remote2:`transfers@${transferDomain}/remoteEntry.js`,
          mf_querys:`querys@${queryDomain}/remoteEntry.js`,
          mf_transfers:`transfers@${transferDomain}/remoteEntry.js`,
          remote3 : `app3@http://192.168.30.133:3000/_next/static/${location}/remoteEntry.js`,
          remote4 : `app3@http://localhost:2001/_next/static/${location}/remoteEntry.js`,
          remote : `remote@http://192.168.30.133:8081/_next/static/${location}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        remoteType: "var",
        exposes: {
          "./MyContext": "./src/context/MyContextProvider.js"
        },
        shared:{
          
        },    
          
        
      }
      )
      );
    
    
    // Configures ModuleFederation and other Webpack properties
    //withModuleFederation(config, options, mfConf);

    //config.plugins.push(new MergeRuntime());

    if (!isServer) {
      config.output.publicPath = 'http://localhost:3000/_next/';
    }

    return config;
  },
};