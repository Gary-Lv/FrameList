const { program, requiredOption } = require("commander");
const path = require("path");
const fse = require("fs-extra");
const Inquirer = require("inquirer");
const Creator = require("./Creator");
// 创建命令模块
module.exports = async function (projectName, options) {
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
  // 获取当前的命令执行工作目录
  const cwd = process.cwd();
  // 目标目录
  const targetDir = path.join(cwd, projectName);

  // 判断当前目录下是否存在
  if (fse.existsSync(targetDir)) {
    // 判断是否传入force命令(强制安装) 如果传入，则删除已有的文件
    if (options.force) {
      await fse.remove(targetDir);
    } else {
      // 如果没有强制命令 则提示用户是否继续安装
      let { isOverWhite } = await Inquirer.prompt([
        // 配置询问方式
        {
          name: "isOverWhite",
          type: "confirm",
          message: "当前目录已存在，是否覆盖？",
          default: false,
        },
      ]);
      // 如果确认覆盖 则移除已有文件
      if (isOverWhite) {
        await fse.remove(targetDir);
      } else {
        return;
      }
    }
  }
  // 开始创建项目文件
  const creator = new Creator(projectName, targetDir);
  creator.create(); // 开始创建
};
