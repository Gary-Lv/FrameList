<template>
  <svg class="ys-icon" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>
<script>
  import "../../iconfont/iconfont";
  /**
   * @example ../../../describe_md/YsIcon.md
   */
  export default {
    name: "YsIcon",
    props: {
      /**
       * iconfont字体名称
       */
      icon: {
        type: String,
        required: true,
      },
    },
  };
</script>