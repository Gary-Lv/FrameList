<template>
  <button class="ys-button" :class="btnClass" :disabled="loading || disabled">
    <!-- 加载图标 -->
    <YsIcon v-if="loading" icon="icon-loading" class="btnLoadingIcon ys-load-loop" style="margin-right:5px"></YsIcon>
    <!-- 图标 -->
    <YsIcon :icon="icon" v-if="icon && !loading" class="btnIcon"></YsIcon>
    <span v-if="this.$slots.default">
      <!-- @slot 按钮显示的文本 -->
      <slot></slot>
    </span>
  </button>
</template>
<script>
  /**
   * @displayName YsButton
   * @example  ../../../describe_md/YsButton.md
   */
  export default {
    name: "YsButton",
    props: {
      /**
       * 按钮类型
       * @values primary、info、success、warning、error
       */
      type: {
        type: String,
        default: "",
        validator(type) {
          if (
            type &&
            !["primary", "info", "success", "warning", "error"].includes(type)
          ) {
            console.error(
              "type类型必须是：" + ["primary", "info", "success", "warning", "error"].join("、")
            );
          }
          return true;
        },
      },
      /**
       * 按钮图标名称
       */
      icon: String,
      /**
       * 按钮图标位置
       * @values left、right
       */
      iconPositon: {
        type: String,
        default: "left",
        validator(_val) {
          if (_val && !["left", "right"].includes(_val)) {
            console.error("iconPositon必须是：left / right");
          }
          return true;
        },
      },
      /**
       * 开启按钮loading状态
       */
      loading: Boolean,
      /**
       * 开启按钮禁用状态
       */
      disabled: Boolean
    },
    computed: {
      btnClass() {
        let classes = [];
        if (this.type) {
          classes.push(`ys-button-${this.type}`);
        }
        // 根据传入的位置参数，判断icon位置
        if (this.iconPositon) {
          classes.push(`ys-button-icon-${this.iconPositon}`);
        }
        // 判断如果是禁用或者loading状态
        if (this.loading || this.disabled) {
          classes.push("ys-button-disabled");
        }
        return classes;
      },
    },
  };
</script>