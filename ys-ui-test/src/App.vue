<template>
  <div id="app">
    <div class="homePage pageBackground">
      <h1>换肤功能</h1>
      <Button style="background:rgba(58, 95, 157, 1);color:white" @click="ChanageTheme(1)">蓝色</Button>&nbsp;&nbsp;
      <Button style="background:rgba(209, 62, 57, 1);color:white" @click="ChanageTheme(2)">红色</Button>&nbsp;&nbsp;
      <Button style="background:rgba(86, 177, 252, 1);color:white" @click="ChanageTheme(3)">天蓝色</Button>&nbsp;&nbsp;
      <Button style="background:rgba(255, 183, 0, 1);color:white" @click="ChanageTheme(4)">黄色</Button>&nbsp;&nbsp;
      <br><br><br><br>
      <h1>YsUI自定义组件</h1>
      <YsButton>默认按钮</YsButton>&nbsp;&nbsp;
      <ys-button type="primary">主要按钮</ys-button>&nbsp;&nbsp;
      <ys-button type="info">信息按钮</ys-button>&nbsp;&nbsp;
      <ys-button type="success">成功按钮</ys-button>&nbsp;&nbsp;
      <ys-button type="warning">警告按钮</ys-button>&nbsp;&nbsp;
      <ys-button type="error">错误按钮</ys-button>
      <br /><br />
      <!-- 带图标的按钮 -->
      <ys-button icon="icon-circle-plus-outline">我是带图标的</ys-button>&nbsp;&nbsp;
      <ys-button icon="icon-edit" type="error">我是左侧带图标的</ys-button>&nbsp;&nbsp;
      <ys-button icon="icon-delete" type="success" iconPositon="right">我是右侧带图标的</ys-button>
      <br><br>
      <!-- loading 按钮 -->
      <ys-button type="primary" loading>禁用loading按钮</ys-button>&nbsp;&nbsp;
      <ys-button disabled>禁用按钮</ys-button>

      <br><br><br><br>
      <h1>IView组件</h1>
      <Button type="primary">Primary</Button>
      <br><br>
      <Input v-model="value" placeholder="Enter something..." style="width: 300px" /><br><br>
      <Input search placeholder="Enter something..." style="width: 300px" /><br><br>
      <RadioGroup v-model="phone">
        <Radio label="apple">
          <Icon type="logo-apple"></Icon>
          <span>Apple</span>
        </Radio>
        <Radio label="android">
          <Icon type="logo-android"></Icon>
          <span>Android</span>
        </Radio>
        <Radio label="windows">
          <Icon type="logo-windows"></Icon>
          <span>Windows</span>
        </Radio>
      </RadioGroup><br><br>
      <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
      </CheckboxGroup><br><br>
      <Switch size="large" />
      <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select><br><br>
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
    </div>
  </div>
</template>
<script>
  export default {
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

<style lang="less">
  #app {
    padding: 20px 30px;

    .homePage {
      width: 100%;
      height: 100%;
      border: 1px solid red;
    }
  }
</style>