<template>
  <div class="MenuList">
    <Menu theme="dark" width="200" :active-name="ActiveMenuName">
      <MenuItem v-for="(item,index) in routerInfo" :key="index" :name="item.name" :to="{name:item.name}">
      {{item.meta.title}}</MenuItem>
    </Menu>
  </div>
</template>
<script>
  import routerList from "../../router/router"
  export default {
    name: "MenuList",
    data() {
      return {
        routerInfo: [],
        ActiveMenuName: this.$route.name
      }
    },
    mounted() {
      const childern = routerList[0].children;
      this.routerInfo = childern;
      console.log(childern)
    }
  }
</script>
<style lang="less" scoped>
  .MenuList {
    height: 100%;
    width: 100%;

    .ivu-menu-item {
      font-size: 16px;
      font-weight: 500;
    }
  }
</style>