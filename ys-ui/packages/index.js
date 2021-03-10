import Vue from "vue";
import IviewCom from "./iviewCom";
// Vue.use(ViewUI);
/**
 * 自开发组件 或者 封装组件
 */
import YsButton from "./components/YsButton";
import YsIcon from "./components/YsIcon";
import YsButtonIv from "./components/YsButtonIv";

const YsComponents = {
  ...IviewCom,
  YsButton,
  YsButtonGroup: YsButton.group,
  YsIcon,
  YsButtonIv,
};

// 安装方法
const install = (Vue) => {
  Object.keys(YsComponents).forEach((key) => {
    Vue.component(key, YsComponents[key]);
  });
};

// 为了防止外部通过script标签引入组件库，这里需要做判断
if (typeof window !== "undefined" && window.Vue) {
  install(Vue); // 全局通过script标签引入的话，会默认调用install方法
}

export default { install, ...YsComponents };
