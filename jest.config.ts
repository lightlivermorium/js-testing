import type { Config } from 'jest';
import { createDefaultPreset } from 'ts-jest';

const config: Config = {
  ...createDefaultPreset(),
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  testMatch: ['__tests__/**/*.test.ts'],
};

export default config;
