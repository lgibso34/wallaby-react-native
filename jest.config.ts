// module.exports = {
//   preset: 'react-native',
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
// };

import type {Config} from 'jest';

const rnJestPreset = require('react-native/jest-preset');

const config: Config = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  projects: [
    {
      ...rnJestPreset,
      displayName: 'Root',
      testMatch: ['<rootDir>/__tests__/**/*.[jt]s?(x)'],
    },
    {
      ...rnJestPreset,
      displayName: 'Help',
      rootDir: '<rootDir>/src/features/Help',
      transform: {
        '^.+\\.(js|ts|tsx)$': ['babel-jest', {rootMode: 'upward'}],
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    },
    {
      ...rnJestPreset,
      displayName: 'Menu',
      rootDir: '<rootDir>/src/features/Menu',
      transform: {
        '^.+\\.(js|ts|tsx)$': ['babel-jest', {rootMode: 'upward'}],
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    },
  ],
};

export default config;
