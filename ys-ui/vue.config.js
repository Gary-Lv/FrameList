module.exports = {
  pages: {
    index: {
      entry: "example/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  devServer: {
    port: 52529,
  },
};
