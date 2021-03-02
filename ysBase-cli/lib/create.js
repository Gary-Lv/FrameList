const Inquirer = require("inquirer");
const { checkFile } = require("./utils");
const Creator = require("./Creator");
// 创建命令模块
module.exports = async function (projectName, options, isInit = false) {
  // 判断当前有没有传入项目名称
  if (!projectName) {
    let { inputProName } = await Inquirer.prompt({
      name: "inputProName",
      type: "input",
      message: "请输入项目名称？",
      validate: function (val) {
        if (val == "") {
          return "请提供一个可用的项目名称！";
        }
        return true;
      },
    });
    projectName = inputProName;
  }

  // 判断是否存在同名目录  成功返回当前目录  否则返回false
  let result = await checkFile(options, projectName);
  if (!result) return;
  // 开始创建项目文件
  const creator = new Creator(projectName, result);
  creator.create(isInit); // 开始创建
};
