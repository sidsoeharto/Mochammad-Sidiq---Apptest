/* eslint-disable prettier/prettier */
import { NativeModules } from 'react-native';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler/jestSetup', () => {});
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('@rneui/themed', () => {});
jest.mock('react-native-dialog', () => {
  // const React = require('react');
  // const {View} = require('react-native');
  // const RealModule = jest.requireActual('react-native-dialog');
  // const MockedModule = {
  //   ...RealModule,
  //   Dialog: ({children}) => <View>{children}</View>,
  // };
  // return MockedModule;
});
jest.mock('react-native-paper', () => {
  // const React = require('react');
  // const {View} = require('react-native');
  // const RealModule = jest.requireActual('react-native-paper');
  // const MockedModule = {
  //   ...RealModule,
  //   Avatar: ({children}) => <View>{children}</View>,
  // };
  // return MockedModule;
});
jest.mock('@react-navigation/bottom-tabs', () => ({
  createBottomTabNavigator: jest.fn(),
}));
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest.fn(),
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {});
jest.mock('twrnc', () => jest.fn());
jest.mock('react-native', () => ({
  UIManager: {
    RCTView: () => ({
      directEventTypes: {},
    }),
  },
  KeyboardObserver: {},
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
  StyleSheet: {
    create: () => ({}),
  },
  useColorScheme: {},
  StatusBar: "",
}));
