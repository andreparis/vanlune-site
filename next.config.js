const withImages = require('next-images');
const { withPlugins } = require('next-compose-plugins');


const nextConfig = {
  env: {
    PRODUCTS_URL: 'https://1uxg4uolgc.execute-api.us-east-1.amazonaws.com/Dev/products',
    ORDERS_URL: 'https://1stpx2w2n3.execute-api.us-east-1.amazonaws.com/Dev/orders',
    ACCOUNT_URL:'https://gad0xqj170.execute-api.us-east-1.amazonaws.com/Dev/accounts'
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    return config
  }
}

module.exports = withPlugins([withImages],nextConfig);