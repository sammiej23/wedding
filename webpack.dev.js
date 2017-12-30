const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devServer: {
    inline: true,
    contentBase: './app',
    port: 8100
  }
});
