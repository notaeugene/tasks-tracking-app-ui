module.exports = {
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/e2e/integration/**/*.spec.ts'],
  reporters: ['default', ['jest-junit', { outputDirectory: './e2e/reports' }]],
};
