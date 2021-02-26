var webpackConfig = require("@vue/cli-service/webpack.config");
module.exports = function(config) {
  config.set({
    frameworks: ["mocha"], // 测试框架
    files: ["tests/**/*.spec.js"], // 测试入口文件
    // 预处理器 karma-webpack
    preprocessors: {
      "**/*.spec.js": ["webpack", "sourcemap"],
    },
    // autoWatch: true,
    webpack: webpackConfig, // Webpack配置
    reporters: ["spec"], // 测试报告
    browsers: ["ChromeHeadless"], // 浏览器
    // Webpack中间件
    // webpackMiddleware: {
    //   noInfo: true,
    // },
    // 测试覆盖率报告
    // https://github.com/karma-runner/karma-coverage/blob/master/docs/configuration.md
    // coverageReporter: {
    //   dir: "./coverage",
    //   reporters: [{ type: "lcov", subdir: "." }, { type: "text-summary" }],
    // },
  });
};
