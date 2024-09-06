const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/job-listing/'  // Replace 'your-repo-name' with the actual repository name
    : '/',
    devServer: {
      port: 8080, // or any available port
      open: true, // to auto-open the browser
    }
})
