import React from 'react';
import toJson from 'enzyme-to-json';
import { mount, shallow } from 'enzyme';
import ATodo from '../index';
import { ACheckbox } from '../../../atoms';

describe('Test ATodo running correctly', () => {
  it('test todo props', () => {
    const wrapper = mount(<ATodo content="Todo" />);
    expect(wrapper.props().checked).toEqual(false);
    expect(wrapper.props().content).toEqual('Todo');
  });

  it('test render content inside', () => {
    const wrapper = mount(<ATodo content="Todo" />);
    const p = wrapper.find('.content');
    expect(p.text()).toBe('Todo');
  });

  it('test change status', () => {
    const onChangeStatus = jest.fn();
    const wrapper = shallow(<ATodo content="Todo" onChangeStatus={onChangeStatus} />);

    const checkbox = wrapper.find(ACheckbox);
    checkbox.simulate('change');
    expect(onChangeStatus).toHaveBeenCalled();
  });

  it('test rendering', () => {
    const tree = mount(<ATodo content="Todo" />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
