## 将包变成全局的

- 先创建一个可执行的脚本 （#! /usr/bin/env node）
- 在 package.json 中配置 bin 字段 （bin 字段可以配置成一个对象，处理命令的别名，如果 bin 是一个字符串，则链接到本地环境的命令名字就是 package.json 中的 name 字段）
- 执行命令 npm link 链接到本地环境 (创建一个 node 可执行的全局命令)

> link 命令，相当于将当前本地模块链接到 npm 目录下，这个 npm 目录可以直接访问，所以当前包就可以直接访问了

---

### 实现脚手架的流程

- 1、配置可执行命令 （commander）
- 2、首先要有一个命令交互的功能 （inquirer）
- 3、将模板下载下来 （donwload-git-repo）
- 4、根据用户的选择，动态生成内容 （metalsmith）
