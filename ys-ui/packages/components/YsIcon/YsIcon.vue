<template>
  <svg class="ys-icon" aria-hidden="true">
    <use :xlink:href="`#${icon}`"></use>
  </svg>
</template>
<script>
  import "../../iconfont/iconfont";
  export default {
    name: "ys-icon",
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