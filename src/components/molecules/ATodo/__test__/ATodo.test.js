import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ATodo from '../index';

describe('Test ATodo running correctly', () => {
  it('test todo props', () => {
    const wrapper = mount(<ATodo content="Todo" />);
    expect(wrapper.props().checked).toEqual(false);
    expect(wrapper.props().content).toEqual('Todo');
  });

  it('test rendering', () => {
    const tree = mount(<ATodo content="Todo" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
