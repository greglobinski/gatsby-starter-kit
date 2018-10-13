module.exports = {
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$',
  transform: {
    '^.+\\.jsx?$': '<rootDir>/test/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: [
    '<rootDir>/test/loadershim.js',
    '<rootDir>/test/throwOnPropTypeError.js',
  ],
  coverageDirectory: './coverage/',
  collectCoverageFrom: ['<rootDir>/src/starter/**/*.js'],
};
