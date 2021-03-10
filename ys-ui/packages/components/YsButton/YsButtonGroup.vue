<template>
  <div class="ys-button-group">
    <slot></slot>
  </div>
</template>
<script>
  /**
   * @example [none]
   */
  export default {
    name: "YsButtonGroup",
    mounted() {
      // 判断内部给定的是否为button按钮  如果不是  提示错误
      let children = this.$el.children;
      for (let i = 0; i < children.length; i++) {
        console.assert(children[i].tagName === "BUTTON", "子元素必须是button")
      }
    }
  }
</script>