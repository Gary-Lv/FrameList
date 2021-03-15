<template>
  <div class="Home">
    <div class="homePage pageBackground">
      <div class="title">
        <h1>远舢Base-Components组件</h1>
      </div>
      <div class="shuoming">
        <h2>组件开发流程</h2>
        <div>
          <span>1、在 packages/components 目录下创建组件的组件名文件夹，文件名遵循大驼峰命名，文件名和组件名保持统一。</span> <br>
          <span>2、每一个组件文件夹下必须包含 index.js 文件，里面用来导出对应的组件和组件的安装。</span><br>
          <span>3、每开发一个组件都要手动在 packages/index.js 文件引入，并添加到 index.js 文件中的 YsComponents 对象里。</span><br>
          <span>4、在 YsStyle/styles/components 文件下声明同名的组件less样式文件，并在 YsStyle/styles/components/index.less
            文件引入。</span><br>
          <span>5、如果开发的组件是依赖Iview开发，并且牵扯到换肤，那么在 YsStyle/YsTheme/IviewStyle 文件里声明对应的组件名less文件，修改Iview组件样式。</span><br>
          <span>6、开发修改的Iview组件样式需要在 YsStyle/YsTheme/index.less
            文件里引入，并且在ChangeTheme函数中调用此Iview组件换肤的less函数，并传入参数值。</span><br>
          <span>7、组件开发完（或者需要测试），在 example/views 文件下创建自己的vue文件，文件名以（_test）结尾，然后在 router/router.js 文件引入。每个路由对象必须包含
            meta:{title:xxx} 。</span><br>
          <span style="color:red">注意：</span><br>
          <span>组件开发完成之后，需要提供外部使用，所以需要生成一个帮助文档，这里使用了 styleguidist 插件生成，所以开发中需要按照这个插件的注释规范去开发组件，以便顺利生成对应的文档。<br>
            这里可以参考（<a href="https://segmentfault.com/a/1190000022721297"
              target="view_window">https://segmentfault.com/a/1190000022721297</a>）或者官网（<a
              href="https://vue-styleguidist.github.io/" target="view_window">官网</a>）去了解规范。
          </span><br>
          <span>为了组件文件尽量简洁，我们将每一个组件的示例和自述文件全部放到describe_md文件夹下面，文件名保持和组件一致，并且在对应的组件的script标签下通过@example
            url/xxx.md方式引入</span><br>
          <span>可以运行 <span style="color:#06f9f9">npm run styleguide</span> 命令去查看生成的组件说明文档</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "Home",
    data() {
      return {
        phone: 'apple',
        fruit: ['苹果'],
        cityList: [{
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    },
  }
</script>
<style lang="less" scoped>
  .Home {
    width: 100%;
    height: 100%;

    .homePage {
      width: 100%;
      height: 100%;

      .title {
        height: 80px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .shuoming {
        padding: 10px;

        &>div {
          padding: 16px;
          color: white;
          font-size: 18px;
          font-weight: 500;

          &>span {
            display: inline-block;
            margin-bottom: 10px;
          }
        }
      }
    }
  }
</style>