module.exports = {
  // set your styleguidist configuration here
  title: "远舢UI组件库",
  defaultExample: true,
  components: "packages/components/**/*.vue",
  styleguideDir: "dist_styleguide",
  codeSplit: true,
  skipComponentsWithoutExample: true,
  require: ["./YsStyle/styles/index.less"], // 页面样式文件引入
  //页面配置
  usageMode: "expand", //文档中属性和方法的标签初始化状态，决定是否展开
  exampleMode: "expand", //文档中代码示例的标签初始化状态，决定是否展开。
  copyCodeButton: true, //代码顶部的复制按钮
};
