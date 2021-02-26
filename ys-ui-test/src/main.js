import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入ysUI组件库
import ysUI from "ys-ui";
import "ys-ui/dist/styles/ys-ui.css";
// IView
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

// 修改主题色配置
import "./theme/index.less";

Vue.use(ysUI);
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
