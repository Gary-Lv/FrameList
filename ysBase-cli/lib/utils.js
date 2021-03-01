const ora = require("ora");

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

module.exports = { sleep, wrapLoading };
