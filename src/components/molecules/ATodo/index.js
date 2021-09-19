import React from 'react';
import PropTypes from 'prop-types';
import { ACheckbox } from '../../atoms';
import StyledTodo from './styled';

const ATodo = ({
  content,
  checked,
  onChangeStatus,
}) => (
  <StyledTodo className="a-todo">
    <div className="content">
      {content}
    </div>
    <ACheckbox checked={checked} onChange={onChangeStatus} />
  </StyledTodo>
);

ATodo.defaultProps = {
  content: '',
  checked: false,
  onChangeStatus: null,
};

ATodo.propTypes = {
  content: PropTypes.string,
  checked: PropTypes.bool,
  onChangeStatus: PropTypes.func,
};

export default ATodo;
