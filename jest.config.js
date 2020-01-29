module.exports = {
  displayName: "calculator-tests",
  testEnvironment: "jsdom",
  coverageDirectory: "./coverage",
  collectCoverageFrom: [
    "**/src/**/*.js",
    "!**/__tests__/**",
    "!**/node_modules/**"
  ],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  }
};
