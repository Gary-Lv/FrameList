const configInfo = {
  serviceProxy: {
    BaseUrl: "http://39.106.15.70:8989/",
    loginServeUrl: "http://139.199.31.200:9189/",
  },
  PaaSCode: "00", // 平台Code码
  ThemeIndex: 1, // 默认使用的皮肤ID
  IsBreadcrumb: true, // 是否开启面包屑组件
  IsHeaderTab: true, // 是否开启头部多Tab切换的组件
  IsShowCollapsedBtn: true, // 是否显示左侧菜单栏的收起按钮
  DefUnfold: true, // 菜单默认是否是展开状态
  IsCaptchaVerify: false, // 是否开启滑块验证功能
};

//设置属性不可修改
let NotAlter = (obj) => {
  if (typeof obj === "object" && obj != null) {
    for (let key in obj) {
      // 判断如果还是对象
      if (typeof key === "object" && key != null) {
        NotAlter(key);
      } else {
        Object.defineProperty(obj, key, { writable: false });
      }
    }
  }
};

NotAlter(configInfo);

window.GlobalConfig = configInfo;
