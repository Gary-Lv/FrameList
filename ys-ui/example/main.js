import Vue from "vue";
import App from "./App.vue";

// 引入组件库组件
import ysUi from "../packages/index";
// 测试换主题实现
import "./MyTheme/theme.less";
Vue.use(ysUi);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
