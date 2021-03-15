<template>
  <div class="main">
    <div class="sider">
      <div class="comNames">
        <span>组件名称</span>
      </div>
      <div class="comNameList">
        <MenuList></MenuList>
      </div>
    </div>
    <div class="content">
      <div class="themeList">
        <YsiButton size="large" style="background:rgba(58, 95, 157, 1);color:white"
          @click="ChanageTheme(1)">蓝色主题</YsiButton>&nbsp;&nbsp;
        <YsiButton size="large" style="background:rgba(209, 62, 57, 1);color:white" @click="ChanageTheme(2)">红色主题</YsiButton>&nbsp;&nbsp;
        <YsiButton size="large" style="background:rgba(86, 177, 252, 1);color:white" @click="ChanageTheme(3)">天蓝色主题</YsiButton>&nbsp;&nbsp;
        <YsiButton size="large" style="background:rgba(255, 183, 0, 1);color:white" @click="ChanageTheme(4)">黄色主题</YsiButton>&nbsp;&nbsp;
      </div>
      <div class="comContent">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
  import MenuList from "../menuList"
  export default {
    name: "Main",
    components: {
      MenuList
    },
    data() {
      return {}
    },
    mounted() {
      this.ChanageTheme(1);
    },
    methods: {
      ChanageTheme(id) {
        let themeName = "";
        switch (id) {
          case 1:
            themeName = "lan-theme";
            break;
          case 2:
            themeName = "red-theme";
            break;
          case 3:
            themeName = "tlan-theme";
            break;
          case 4:
            themeName = "yellow-theme";
            break;
        };
        document.getElementById('app').className = themeName;
      }
    }
  }
</script>
<style lang="less" scoped>
  .main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;

    .sider {
      width: 200px;
      height: 100%;
      background: #2c2d33;
      border-right: 1px solid rgb(160, 160, 160);

      .comNames {
        height: 50px;
        width: 100%;
        border-bottom: 2px solid rgb(160, 160, 160);
        display: flex;
        justify-content: center;
        align-items: center;

        &>span {
          font-size: 22px;
          font-weight: 500;
          color: rgb(228, 228, 228);
        }
      }

      .comNameList {
        height: calc(100% - 50px);
        width: 100%;
      }
    }

    .content {
      height: 100%;
      overflow: hidden;
      flex: 1;

      .themeList {
        height: 50px;
        width: 100%;
        background: #2c2d33;
        border-bottom: 2px solid rgb(160, 160, 160);
        padding: 0 16px;
        display: flex;
        align-items: center;

        &>button {
          margin-left: 8px;
        }
      }

      .comContent {
        height: calc(100% - 50px);
        width: 100%;
        background: #3a3e46;
        padding: 16px;
        overflow: auto;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>