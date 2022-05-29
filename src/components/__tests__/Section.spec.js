import React from 'react';
import Section from '../Section';
import { Avatar } from 'react-native-paper';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

jest.mock('@rneui/themed', () => {
  const mockAvatar = jest.requireActual(Avatar);
  return mockAvatar;
})

describe('Section', () => {
  it('renders as expected', () => {
    const wrapper = renderer.render(
      <Section 
        id={1}
        title={`John Doe`}
        imageUrl={'https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png'}
        avatarName={`JD`}></Section>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});