const webpack = require('webpack');

module.exports = function override(config) {
  // Ensure fallback exists
  if (!config.resolve) config.resolve = {};
  if (!config.resolve.fallback) config.resolve.fallback = {};

  // Add necessary fallbacks
  Object.assign(config.resolve.fallback, {
    url: require.resolve('url/'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    fs: false,
    path: require.resolve('path-browserify'),
    crypto: require.resolve('crypto-browserify'),
    querystring: require.resolve('querystring-es3'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
    os: require.resolve('os-browserify/browser'),
  });

  // Provide global shims for Buffer and process
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: require.resolve('process/browser'),
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);

  return config;
};
