const ora = require("ora");
const path = require("path");
const fse = require("fs-extra");
const Inquirer = require("inquirer");
const chalk = require("chalk");
const { serviceProxy, configInfo } = require("./config");

async function sleep(n) {
  return new Promise((resolve, reject) => setTimeout(resolve, n));
}

// 命令执行时候的一个loading效果包裹
async function wrapLoading(fn, message, ...agrs) {
  const spinner = ora(message);
  spinner.start(); // 开始加载

  // 判断加载次数 超过三次  自动停止
  // if (second === 3) {
  //   spinner.stop();
  //   return false;
  // }

  try {
    let repos = await fn(...agrs);
    spinner.succeed(); // 成功
    return repos; // 返回函数执行结果
  } catch (e) {
    spinner.fail("请求失败！准备重新请求...");
    // second += 1;
    await sleep(1500);
    return wrapLoading(fn, message, ...agrs);
  }
}

// 检测文件是否存在，存在的话是否替换
async function checkFile(options, projectName) {
  // 获取当前的命令执行工作目录
  const cwd = process.cwd();
  // 目标目录
  let targetDir = path.join(cwd, projectName);

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
        return false;
      }
    }
  }
  return targetDir;
}

// 拷贝配置好的文件到指定的目录下
async function copyConfig(projectName) {
  let configUrl = `${projectName}/public/config/config.js`;
  // 创建文件
  await fse.createFileSync(configUrl);
  // 写入数据
  let result = await fse.writeFileSync(configUrl, configInfo);
  if (!result) {
    console.log();
    console.log(chalk.green("生成配置文件成功！"));
  } else {
    console.log();
    console.log(chalk.red("生成配置文件失败！"));
  }
}

module.exports = { sleep, wrapLoading, checkFile, copyConfig };
