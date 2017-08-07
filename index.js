var requireDir = require('require-dir');

const init = () => {
  return requireDir('./tasks', { recurse: true });
};

module.exports = {
  init
};
