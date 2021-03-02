const repoName = "Gary-Lv/ys-base-cli";
const serviceProxy = {
  BaseUrl: "http://39.106.15.70:8989/",
  loginServeUrl: "http://139.199.31.200:9189/",
};
const configInfo = `const configInfo = {
  serviceProxy: ${JSON.stringify(serviceProxy)},
  PaaSCode: "00",
  ThemeIndex: 1,
  IsBreadcrumb: true,
  IsHeaderTab: true,
  IsShowCollapsedBtn: true,
  DefUnfold: true,
  IsCaptchaVerify: false,
};
let NotAlter = (obj) => {
  if (typeof obj === "object" && obj != null) {
    for (let key in obj) {
      if (typeof key === "object" && key != null) {
        NotAlter(key);
      } else {
        Object.defineProperty(obj, key, { writable: false });
      }
    }
  }
};
NotAlter(configInfo);
window.GlobalConfig = configInfo;`;
module.exports = { repoName, serviceProxy, configInfo };
