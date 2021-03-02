const { program } = require("commander");
const shell = require("shelljs");
const ora = require("ora");
const chalk = require("chalk");

class InstallActions {
  constructor(props) {
    this.install(props);
  }
  install(props) {
    const spinner = ora("正在安装依赖包...");
    spinner.start();
    shell.cd(props.fileUrl).exec(`${props.mode} install`, (err) => {
      if (err) {
        spinner.fail();
        console.log(chalk.red("依赖包安装失败！"));
      } else {
        spinner.succeed();
        console.log(chalk.green("依赖包安装成功！"));
      }
    });
  }
}
module.exports = InstallActions;
