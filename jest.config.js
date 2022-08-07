module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
  ],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass|png|jpg)$': 'identity-obj-proxy',
  },
};
