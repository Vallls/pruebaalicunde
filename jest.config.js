module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    testEnvironment: 'jsdom',
    globalSetup: 'jest-preset-angular/global-setup',
  };
  