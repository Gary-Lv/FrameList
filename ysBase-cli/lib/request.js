// 通过axios获取远程仓库的模板信息
const axios = require("axios");
const { repoName } = require("./config");

axios.interceptors.response.use((res) => res.data);

// 获取模板列表信息
async function fetchRepoList() {
  return await axios.get(`https://api.github.com/orgs/${repoName}/repos`);
}

// 获取模板版本信息
async function fetchTagList(repo) {
  return await axios.get(
    `https://api.github.com/repos/${repoName}/${repo}/tags`
  );
}

module.exports = { fetchRepoList, fetchTagList };
