module.exports = ({ name }) => ({
  displayName: name,
  moduleFileExtensions: ['ts', 'js', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
});
