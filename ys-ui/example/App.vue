<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style lang="less">
  @import "../YsStyle/styles/index.less";

  #app {
    width: 100%;
    height: 100%;
    color: #e5e2e2;
  }

  // 滚动条样式修改

  // ::-webkit-scrollbar 滚动条整体部分
  // ::-webkit-scrollbar-thumb  滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条）
  // ::-webkit-scrollbar-track  滚动条的轨道（里面装有Thumb）
  // ::-webkit-scrollbar-button 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。
  // ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
  // ::-webkit-scrollbar-corner 边角，即两个滚动条的交汇处
  // ::-webkit-resizer 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件
  body::-webkit-scrollbar,
  div::-webkit-scrollbar,
  ul::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }

  body::-webkit-scrollbar-track,
  div::-webkit-scrollbar-track,
  ul::-webkit-scrollbar-track {
    background: rgba(1, 1, 1, 0.1);
    border-radius: 2px;
  }

  body::-webkit-scrollbar-thumb,
  div::-webkit-scrollbar-thumb,
  ul::-webkit-scrollbar-thumb {
    background: #bfbfbf;
    border-radius: 10px;

    &:hover {
      background: #bfbfbf;
    }
  }

  body::-webkit-scrollbar-corner,
  div::-webkit-scrollbar-corner,
  ul::-webkit-scrollbar-corner {
    background: #179a16;
  }
</style>