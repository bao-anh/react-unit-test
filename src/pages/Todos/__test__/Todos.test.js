import React from 'react';
import toJson from 'enzyme-to-json';
import { mount } from 'enzyme';
import Todos from '../index';
import { ATodo } from '../../../components/molecules';

describe('Test Todos running correctly', () => {
  it('test onChange input', () => {
    const wrapper = mount(<Todos />);
    const input = wrapper.find('input').first();
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Todo' } });
    expect(input.render().attr('value')).toBe('Todo');
  });

  it('test add new todo', async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(() => [[], setState]);

    const wrapper = mount(<Todos />);
    const input = wrapper.find('input').first();
    input.simulate('focus');
    input.simulate('change', { target: { value: 'Todo' } });
    input.simulate('keyDown', { keyCode: 13 });
    wrapper.update();

    const items = wrapper.find(ATodo);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(items).toHaveLength(1);
  });
});
