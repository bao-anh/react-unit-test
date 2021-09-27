import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { AInput } from '../../components/atoms';
import { ATodo } from '../../components/molecules';
import StyledTodos from './styled';

const Todos = () => {
  const [newTodoContent, setNewTodoContent] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddNewTodo = () => {
    const newTodo = {
      id: uuidv4(),
      content: newTodoContent,
      checked: false,
    };
    setTodos([newTodo, ...todos]);
    setNewTodoContent('');
  };

  const handleChangeTodoStatus = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        checked: !todo.checked,
      };
    });
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((items) => items.id !== id);
    setTodos(newTodos);
  };

  const renderTodos = () => {
    if (!todos.length) return null;
    return (
      todos.map((todo) => (
        <ATodo
          className="todos__item"
          key={todo.id}
          content={todo.content}
          checked={todo.checked}
          onChangeStatus={() => handleChangeTodoStatus(todo.id)}
          onDeleteTodo={() => handleDeleteTodo(todo.id)}
        />
      ))
    );
  };

  return (
    <StyledTodos>
      <div className="todos">
        <AInput
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
          placeholder="Input your new todo"
          onPressEnter={handleAddNewTodo}
        />
        {renderTodos()}
      </div>
    </StyledTodos>
  );
};

export default Todos;
