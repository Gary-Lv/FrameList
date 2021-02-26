// 简化打印参数
const cleanAegs = (cmd) => {
  const args = {};
  cmd.options.forEach((o) => {
    const key = o.long.slice(2);
    if (cmd[key]) args[key] = cmd[key];
  });
  return args;
};

module.exports = {
  cleanAegs,
};
