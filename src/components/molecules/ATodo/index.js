import React from 'react';
import PropTypes from 'prop-types';
import { ACheckbox } from '../../atoms';
import StyledTodo from './styled';

const ATodo = ({
  content,
  checked,
}) => (
  <StyledTodo>
    {content}
    <ACheckbox checked={checked} />
  </StyledTodo>
);

ATodo.defaultProps = {
  content: '',
  checked: false,
};

ATodo.propTypes = {
  content: PropTypes.string,
  checked: PropTypes.bool,
};

export default ATodo;
