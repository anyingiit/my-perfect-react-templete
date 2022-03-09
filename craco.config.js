/* craco.config.js */

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' }, // 配置主题色为绿色
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};