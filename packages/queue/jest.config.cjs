const baseConfig = require('../jest.settings');
const packageConfig = require('./package');

module.exports = baseConfig(packageConfig, __dirname);
