import Vue from "vue";
import Router from "vue-router";
import routes from "./router";

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const router = new Router({ routes });
Vue.use(Router);

export default router;
