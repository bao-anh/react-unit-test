import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import ACheckbox from '../index';

describe('Test ACheckbox running correctly', () => {
  it('test checkbox props', () => {
    const wrapper = mount(<ACheckbox label="Primary" />);
    expect(wrapper.props().checked).toEqual(false);
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.text()).toEqual('Primary');
  });

  it('test checkbox onChange', () => {
    const onChange = jest.fn(() => 'checked');
    const wrapper = mount(<ACheckbox onChange={onChange} />);
    wrapper.props().onChange();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.results[0].value).toBe('checked');
  });

  it('test rendering', () => {
    const tree = mount(<ACheckbox label="Primary" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
