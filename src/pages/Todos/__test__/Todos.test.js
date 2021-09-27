import React from 'react';
import { mount } from 'enzyme';
import Todos from '../index';
import { ATodo } from '../../../components/molecules';

describe('Test Todos running correctly', () => {
  let todos;
  let addTodoInput;
  let setState;
  beforeAll(() => {
    todos = mount(<Todos />);
    addTodoInput = todos.find('input').first();
    addTodoInput.simulate('focus');
    addTodoInput.simulate('change', { target: { value: 'Todo' } });

    setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);
  });

  it('test onChange input', () => {
    expect(addTodoInput.render().attr('value')).toBe('Todo');
  });

  it('test add new todo', () => {
    addTodoInput.simulate('keyDown', { keyCode: 13 });
    todos.update();

    const items = todos.find(ATodo);
    expect(items).toHaveLength(1);
  });

  it('test delete todo', () => {
    addTodoInput.simulate('keyDown', { keyCode: 13 });
    todos.update();

    let items;
    items = todos.find(ATodo);
    expect(items).toHaveLength(2);

    const deleteButton = todos.find('button').first();
    deleteButton.simulate('click');
    todos.update();

    items = todos.find(ATodo);
    expect(items).toHaveLength(1);
  });
});
