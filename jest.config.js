/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  cacheDirectory: './node_modules/.cache/jest/root',
  projects: ['./packages/*/'],
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // https://github.com/facebook/jest/issues/11956
  // workerIdleMemoryLimit: '1GB',
  // maxWorkers: 2,
  // logHeapUsage: true,
};
