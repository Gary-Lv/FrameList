import Vue from "vue";
import App from "./App.vue";
/**
 * 使用本地 （需要放开APP.vue 下的样式引入）
 */
import ysUi from "../packages/index";

/**
 * 使用私服上的 测试线上
 */
// import ysUi from "ys-ui";
// import "ys-ui/dist/styles/ys-ui.css";

// 换主题实现
import "./MyTheme/theme.less";
Vue.use(ysUi);

// import ViewUI from "view-design";
// import "view-design/dist/styles/iview.css";
// Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
