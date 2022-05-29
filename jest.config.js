/* eslint-disable prettier/prettier */
module.exports = {
  preset: 'react-native',
  testEnvironment: 'jsdom',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|@react-native-community|@react-navigation|react-native-vector-icons|react-native-iphone-x-helper|twrnc|react-native-swipe-gestures|react-native-elements/*))',
  ],
  collectCoverage: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  // testRegex: '__tests__/.*spec\\.ts$',
};
