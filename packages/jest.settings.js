/** @return {import('@jest/types').Config.InitialOptions} */
module.exports = ({ name }, rootDir) => ({
  cacheDirectory: `<rootDir>/../../node_modules/.cache/jest/${name}`,
  displayName: name,
  rootDir,
  moduleFileExtensions: ['ts', 'js', 'node'],
  moduleNameMapper: {
    '@utlime/([^/]*)$': '<rootDir>/../$1/src',
    '@utlime/([^/]*)/(.*)$': '<rootDir>/../$1/$2',
  },
  transform: {
    '^.+\\.ts$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.test.json' }],
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
});
