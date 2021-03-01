const { fetchRepoList, fetchTagList } = require("./request");
const { wrapLoading } = require("./utils");
const Inquirer = require("inquirer");
const downloadGitRepo = require("download-git-repo"); // 不是一个promise方法
const util = require("util");
const ora = require("ora");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const { repoName } = require("./config");

class Creator {
  constructor(projectName, targetDir) {
    this._name = projectName;
    this._target = targetDir;
    // 将不支持promise的方法转换成promise方法
    this.downloadGitRepo = util.promisify(downloadGitRepo);
  }
  // 获取模板
  async fetchRepo() {
    let repos = await wrapLoading(fetchRepoList, "正在加载...");
    if (!repos) return;
    repos = repos.map((item) => item.name);
    let { repo } = await Inquirer.prompt({
      name: "repo",
      type: "list",
      message: "请选择一个模板，用来创建项目！",
      choices: repos,
    });
    return repo;
  }
  // 获取版本号
  async fetchTag(repo) {
    let tags = await wrapLoading(fetchTagList, "正在加载...", repo);
    if (!tags) return;
    tags = tags.map((item) => item.name);
    let { tag } = await Inquirer.prompt({
      name: "tag",
      type: "list",
      message: "请选择要安装的版本！",
      choices: tags,
    });
    return tag;
  }
  // 下载模板
  async download(repo, tag) {
    const use_result = await Inquirer.prompt([
      {
        name: "isUseOwn",
        message: "是否使用自定义的项目模板？",
        type: "confirm",
        default: false,
      },
      {
        name: "templateName",
        message: "请输入你的项目模板地址（例如：ZhangSan/template-cli）:",
        type: "input",
        when: function (info) {
          return info.isUseOwn;
        },
      },
    ]);
    const spinner = ora("下载中...");
    spinner.start();
    try {
      await downloadGitRepo(
        // `${repoName}/${repo}${tag ? "#" + tag : ""}`,
        use_result.isUseOwn ? use_result.templateName : repoName,
        path.join(process.cwd(), this._name),
        { clone: true },
        (e) => {
          if (!e) {
            spinner.succeed(console.log(chalk.green("下载资源成功！")));
          } else {
            spinner.fail(console.log(chalk.red("下载资源失败！")));
          }
          // 重命名
          const packageFile = `${this._name}/package.json`;
          this.renameFile(packageFile, this._name);
        }
      );
    } catch (e) {
      spinner.fail(chalk.red("下载资源失败！"));
    }
  }
  // package.json name重命名
  renameFile(filePath, name) {
    if (fs.existsSync(filePath)) {
      let content = JSON.parse(fs.readFileSync(filePath).toString());
      content.name = name;
      const editContent = JSON.stringify(content);
      fs.writeFileSync(filePath, editContent);
    } else {
      console.log(chalk.red("package.json文件不存在！"));
    }
  }
  async create() {
    // 1、先去拉去组织下的模板
    // let repo = await this.fetchRepo();
    // // 2、通过模板找到对应的版本号
    // let tag = await this.fetchTag(repo);
    // 3、下载模板
    // let downloadUrl = await this.download(repo, tag);
    await this.download();
  }
}
module.exports = Creator;
