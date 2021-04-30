// vue.config.js for less-loader@6.0.0
module.exports = {
    css: {
        loaderOptions: {
          less: {
            lessOptions: {
              // If you are using less-loader@5 please spread the lessOptions to options directly
              modifyVars: {
                'primary-color': '#2585a6',
                'link-color': '#2585a6',
                'border-radius-base': '2px',
                'menu-dark-bg':'#003554',
                'layout-sider-background':'#003554'
              },
              javascriptEnabled: true,
            },
          },
        },
      },
};