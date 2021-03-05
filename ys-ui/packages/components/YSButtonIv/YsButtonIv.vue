<template>
  <Button :type="type" :size="size" :icon="icon">
    <span v-if="this.$slots.default">
      <!-- @slot 按钮显示的文本 -->
      <slot></slot>
    </span>
  </Button>
</template>
<script>
  export default {
    name: "YsButtonIv",
    props: {
      /**
       * 按钮类型
       * @values default、primary、dashed、text、info、success、warning、error
       */
      type: {
        type: String,
        default: "default",
      },
      /**
       * 按钮大小
       * @values large、small、default
       */
      size: {
        type: String,
        default: "default"
      },
      /**
       * 设置按钮图标类型
       */
      icon: String,
      /**
       * 开启后，按钮的长度为100%
       */
      long: Boolean,
    }
  }
</script>