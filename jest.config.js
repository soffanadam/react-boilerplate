module.exports = {
  preset: 'ts-jest',
  roots: ['<rootDir>/src', '<rootDir>/tests/unit'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '\\.(html|xml|txt|md)$': 'jest-raw-loader'
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  roots: ['<rootDir>/src', '<rootDir>/tests/unit'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      diagnostics: false,
      isolatedModules: true,
      babelConfig: true
    }
  }
}
