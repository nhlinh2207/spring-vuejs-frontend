// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // https://cli.vuejs.org/config/#devserver-proxy
  publicPath: '/spring-vuejs-0.1/',
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
