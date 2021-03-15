<template>
  <div>
    <h1>自定义按钮组件</h1>
    <YsButton>默认按钮</YsButton>&nbsp;&nbsp;
    <ys-button type="primary">主要按钮</ys-button>&nbsp;&nbsp;
    <ys-button type="info">信息按钮</ys-button>&nbsp;&nbsp;
    <ys-button type="success">成功按钮</ys-button>&nbsp;&nbsp;
    <ys-button type="warning">警告按钮</ys-button>&nbsp;&nbsp;
    <ys-button type="error">错误按钮</ys-button>
    <br /><br />
    <ys-button icon="icon-circle-plus-outline">我是带图标的</ys-button>&nbsp;&nbsp;
    <ys-button icon="icon-edit" type="error">我是左侧带图标的</ys-button>&nbsp;&nbsp;
    <ys-button icon="icon-delete" type="success" iconPositon="right">我是右侧带图标的</ys-button>
    <br><br>
    <ys-button type="primary" loading>禁用loading按钮</ys-button>&nbsp;&nbsp;
    <ys-button disabled>禁用按钮</ys-button><br><br>
    <ys-button-group>
      <ys-button type="primary">主要按钮</ys-button>
      <ys-button type="primary">信息按钮</ys-button>
    </ys-button-group>

    <br><br><br><br>
    <h1>IView组件</h1>
    <YsiButton type="primary">Primary</YsiButton><br><br>
    <h3>添加了自己的类型的按钮</h3>
    <YsiButton type="ysConfirm">ysConfirm确认按钮</YsiButton>
    <YsiButton type="ysCancel">ysCancel取消按钮</YsiButton>


    <br><br><br><br>
    <h1>基于IView组件封装</h1>
    <YsButtonIv type="primary">测试组件</YsButtonIv>
  </div>
</template>