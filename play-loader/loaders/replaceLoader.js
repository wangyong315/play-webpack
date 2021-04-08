const loaderUtils = require('loader-utils');

// eslint-disable-next-line func-names
module.exports = function (source) {
  const options = loaderUtils.getOptions(this);
  const result = source.replace('world', options.name);
  return result;
};
