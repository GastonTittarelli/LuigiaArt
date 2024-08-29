import 'ts-node/register';  // Esto registra ts-node para que Jest pueda interpretar TypeScript

import type { Config } from 'jest';

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
};

export default config;
