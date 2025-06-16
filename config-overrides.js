const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    url: require.resolve('url'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    fs: false,
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    querystring: require.resolve('querystring-es3'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify'),
    os: require.resolve('os-browserify/browser'),
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
