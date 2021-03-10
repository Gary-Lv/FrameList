import YsButton from "./YsButton.vue";
import YsButtonGroup from "./YsButtonGroup.vue";

YsButton.group = YsButtonGroup;
YsButton.install = function(Vue) {
  Vue.component(YsButton.name, YsButton);
};

export default YsButton;
