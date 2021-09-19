import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import AInput from '../index';

describe('Test AInput running correctly', () => {
  it('test button props', () => {
    const wrapper = mount(
      <AInput
        label="Email"
        value="email"
        placeholder="Input email here"
        size="middle"
        type="text"
      />,
    );

    expect(wrapper.props().size).toEqual('middle');
    expect(wrapper.props().type).toEqual('text');
    expect(wrapper.props().label).toEqual('Email');
    expect(wrapper.props().value).toEqual('email');
    expect(wrapper.props().placeholder).toEqual('Input email here');
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.props().autoSize).toEqual(false);
    expect(wrapper.props().allowClear).toEqual(false);
    expect(wrapper.props().readonly).toEqual(false);
  });

  it('test input function', () => {
    const onFocus = jest.fn(() => 'focused');

    const wrapper = mount(
      <AInput
        label="Email"
        value="email"
        onFocus={onFocus}
      />,
    );

    wrapper.props().onFocus();
    expect(onFocus).toHaveBeenCalledTimes(1);
    expect(onFocus.mock.results[0].value).toBe('focused');
  });

  it('test rendering', () => {
    const tree = mount(
      <AInput
        label="Email"
        value="email"
        placeholder="Input email here"
        size="middle"
        type="text"
      />,
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
