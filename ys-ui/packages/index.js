import Vue from "vue";
import YsButton from "./components/YsButton";
import YsButtonGroup from "./components/YsButtonGroup";
import YsIcon from "./components/YsIcon";

const YsCom = {
  YsButton,
  YsButtonGroup,
  YsIcon,
};

// 安装方法
const install = (Vue) => {
  Object.keys(YsCom).forEach((key) => {
    Vue.component(YsCom[key].name, YsCom[key]);
  });
};

// 为了防止外部通过script标签引入组件库，这里需要做判断
if (typeof window.Vue !== "undefined") {
  install(Vue); // 全局通过script标签引入的话，会默认调用install方法
}

export default { install };
