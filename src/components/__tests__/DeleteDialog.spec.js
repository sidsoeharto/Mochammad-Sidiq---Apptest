import React from 'react';
import DeleteDialog from '../DeleteDialog';
import { Provider } from 'react-redux';
import store from '../../store';

import ShallowRenderer from 'react-test-renderer/shallow';
const renderer = new ShallowRenderer();

describe('DeleteDialog', () => {
  it('renders as expected', () => {
    let visible = true;
    const func = (bool) => {
      return (bool = !bool);
    }
    const wrapper = renderer.render(
      <Provider store={store}>
        <DeleteDialog visible={visible} toggleDialog={func} id={1} />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});