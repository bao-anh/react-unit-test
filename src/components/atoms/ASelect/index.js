import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';
import StyledASelect from './styled';

const ASelect = ({
  value,
  options,
  onChange,
  label,
  ...props
}) => (
  <StyledASelect>
    <div className="select__label">{label}</div>
    <Select {...props} defaultValue={{ value }} labelInValue onChange={onChange}>
      {options.map((item) => (
        <Select.Option
          value={item.value}
          key={item.value}
        >
          {item.label}
        </Select.Option>
      ))}
    </Select>
  </StyledASelect>
);

ASelect.defaultProps = {
  onChange: null,
  label: null,
};

ASelect.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.any,
  ]).isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string,
};

export default ASelect;
