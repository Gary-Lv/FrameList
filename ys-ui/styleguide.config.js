const path = require("path");
module.exports = {
  title: "远舢UI组件库",
  defaultExample: false,
  components: "packages/components/**/*.vue",
  // ignore: ["**/packages/components/YsButton/YsButtonGroup.vue"],
  styleguideDir: "dist_styleguide",
  codeSplit: true,
  skipComponentsWithoutExample: false,
  require: [
    "./YsStyle/styles/index.less",
    "./node_modules/view-design/dist/styles/iview.css",
  ], // 页面样式文件引入
  //页面配置
  usageMode: "expand", //文档中属性和方法的标签初始化状态，决定是否展开
  exampleMode: "expand", //文档中代码示例的标签初始化状态，决定是否展开。
  copyCodeButton: true, //代码顶部的复制按钮
};
