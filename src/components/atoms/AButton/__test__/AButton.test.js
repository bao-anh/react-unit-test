import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import AButton from '../index';

describe('Test AButton running correctly', () => {
  it('test button props', () => {
    const wrapper = mount(<AButton>Primary</AButton>);
    expect(wrapper.props().size).toEqual('middle');
    expect(wrapper.props().type).toEqual('primary');
    expect(wrapper.props().loading).toEqual(false);
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.text()).toEqual('Primary');
  });

  it('test button onClick', () => {
    const onClick = jest.fn(() => 'clicked');
    const wrapper = mount(<AButton onClick={onClick}>Primary</AButton>);
    wrapper.props().onClick();

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.results[0].value).toBe('clicked');
  });

  it('test rendering', () => {
    const tree = mount(<AButton>Primary</AButton>);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
