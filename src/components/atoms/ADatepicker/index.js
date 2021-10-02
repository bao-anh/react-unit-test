import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { DATE_FORMAT } from '../../../constants/format';
import StyledADatepicker from './styled';

const ADatepicker = ({
  value,
  onChange,
  label,
  ...props
}) => (
  <StyledADatepicker>
    <div className="date-picker__label">{label}</div>
    <DatePicker
      defaultValue={moment().format(DATE_FORMAT)}
      format={DATE_FORMAT}
      value={value}
      onChange={onChange}
      {...props}
    />
  </StyledADatepicker>
);

ADatepicker.defaultProps = {
  value: moment().format(DATE_FORMAT),
  onChange: null,
  label: null,
};

ADatepicker.propTypes = {
  value: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default ADatepicker;
