const { fetchRepoList, fetchTagList } = require("./request");
const { wrapLoading } = require("./utils");
const Inquirer = require("inquirer");
const downloadGitRepo = require("download-git-repo"); // 不是一个promise方法
const util = require("util");

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
  async download(repo, tag) {}
  async create() {
    // 1、先去拉去组织下的模板
    let repo = await this.fetchRepo();
    // 2、通过模板找到对应的版本号
    let tag = await this.fetchTag(repo);
    // 3、下载模板
    let downloadUrl = await this.download(repo, tag);
  }
}
module.exports = Creator;
