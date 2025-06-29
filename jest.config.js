const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};

// jest.config.js
module.exports = {
  verbose: true, // 各テスト名を詳細に表示
  testResultsProcessor: "jest-sonar-reporter" // ← 任意でレポート出力
};
