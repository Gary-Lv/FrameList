const Inquirer = require("inquirer");
const { checkFile } = require("./utils");
const Creator = require("./Creator");
const { fchown } = require("fs-extra");
// 创建命令模块
module.exports = async function (projectName, options, isInit = false) {
  // 判断当前有没有传入项目名称
  if (!projectName) {
    let user_result = await Inquirer.prompt([
      {
        name: "inputProName",
        type: "input",
        message: "请输入项目名称？",
        validate: function (val) {
          if (val == "") {
            return "请提供一个可用的项目名称！";
          }
          return true;
        },
      },
      {
        name: "isTarget",
        type: "confirm",
        message: "是否提供服务请求地址？",
      },
      {
        name: "targetInfo",
        type: "input",
        message: "请输入服务地址：",
        validate: function (url) {
          let reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/;
          if (!reg.test(url)) {
            return "请提供一个可用的服务地址！";
          }
          return true;
        },
        when: function (info) {
          return info.isTarget;
        },
      },
    ]);
    projectName = user_result.inputProName;
    // 替换服务请求地址
    if (user_result.targetInfo) {
      options.serveTarget = user_result.targetInfo;
    }
  }

  // 判断是否存在同名目录  成功返回当前目录  否则返回false
  let result = await checkFile(options, projectName);
  if (!result) return;
  // 开始创建项目文件
  const creator = new Creator(projectName, result, options.serveTarget);
  creator.create(isInit); // 开始创建
};
