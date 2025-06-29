// jest.config.js

const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  verbose: true,
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  testResultsProcessor: "jest-sonar-reporter" // 必要なら
};
