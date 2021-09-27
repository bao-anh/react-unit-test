import React from 'react';
import { DeleteFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { ACheckbox, AButton } from '../../atoms';
import StyledTodo from './styled';

const ATodo = ({
  content,
  checked,
  onChangeStatus,
  onDeleteTodo,
}) => (
  <StyledTodo className="a-todo">
    <div className="left-content">
      <ACheckbox checked={checked} onChange={onChangeStatus} />
      <div className="content">
        {content}
      </div>
    </div>
    <AButton
      type="text"
      icon={<DeleteFilled />}
      onClick={onDeleteTodo}
    />
  </StyledTodo>
);

ATodo.defaultProps = {
  content: '',
  checked: false,
  onChangeStatus: null,
  onDeleteTodo: null,
};

ATodo.propTypes = {
  content: PropTypes.string,
  checked: PropTypes.bool,
  onChangeStatus: PropTypes.func,
  onDeleteTodo: PropTypes.func,
};

export default ATodo;
