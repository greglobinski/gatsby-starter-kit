module.exports = {
  setupFiles: [
    '<rootDir>/test/mockWindowDocument.js',
    '<rootDir>/test/throwOnPropTypeError.js',
  ],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['./src/**/*.js'],
  testRegex: '(/src/{0,1}.*/__tests__/.*)\\.js?$',
  // coverageThreshold: {
  //   global: {
  //     statements: 90,
  //     branches: 80,
  //     functions: 90,
  //     lines: 95,
  //   },
  // },
};
