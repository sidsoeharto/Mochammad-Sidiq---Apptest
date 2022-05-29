/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
// Use with React Native <= 0.63
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();

it('renders app correctly', () => {
  renderer.render(<App />);
});
