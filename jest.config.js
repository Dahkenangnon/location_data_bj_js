module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      '^@/(.*)$': 'src/$1',
    },
    transform: {
      '^.+\\.ts$': ['ts-jest', {
        tsconfig: {
          module: 'CommonJS',
          moduleResolution: 'node',
          ignoreDeprecations: '6.0',
        }
      }],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$',
  };
  