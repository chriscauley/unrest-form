module.exports = {
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@demo/(.*)$': '<rootDir>/demo/src/$1',
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
  },
}
