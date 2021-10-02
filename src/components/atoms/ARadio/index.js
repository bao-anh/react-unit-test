import React from 'react';
import { Radio } from 'antd';
import PropTypes from 'prop-types';
import StyledARadio from './styled';

const ARadio = ({
  value,
  onChange,
  options,
  label,
  ...props
}) => (
  <StyledARadio>
    <div className="radio__label">{label}</div>
    <Radio.Group {...props} value={value} onChange={onChange}>
      {
        options.map((item) => (
          <Radio.Button key={item.value} value={item.value}>
            {item.label}
          </Radio.Button>
        ))
      }
    </Radio.Group>
  </StyledARadio>
);

ARadio.defaultProps = {
  onChange: null,
  label: null,
};

ARadio.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
  label: PropTypes.string,
};

export default ARadio;
