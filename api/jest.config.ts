module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
      "@exmpl/(.*)": "./poc-api-test"
    },
};
