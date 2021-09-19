import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import StyledAInput from './styled';

const { Password, TextArea } = Input;

const AInput = ({
  placeholder,
  onChange,
  disabled,
  readonly,
  size,
  type,
  autoSize,
  allowClear,
  value,
  onFocus,
  label,
  onPressEnter,
}) => {
  const renderLabel = () => {
    if (label === '') return null;
    return <div className="input__label">{label}</div>;
  };

  const renderInput = () => {
    switch (type) {
      case 'text': return (
        <Input
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          allowClear={allowClear}
          value={value}
          onFocus={onFocus}
          onPressEnter={onPressEnter}
        />
      );
      case 'password': return (
        <Password
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          allowClear={allowClear}
          value={value}
          onFocus={onFocus}
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
          onPressEnter={onPressEnter}
        />
      );
      case 'textarea': return (
        <TextArea
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
          size={size}
          autoSize={autoSize}
          allowClear={allowClear}
          value={value}
          onFocus={onFocus}
          onPressEnter={onPressEnter}
        />
      );
      default: {
        throw new Error(`Unhandled type: ${type}`);
      }
    }
  };

  return (
    <StyledAInput className="a-input">
      {renderLabel()}
      {renderInput()}
    </StyledAInput>
  );
};

export default AInput;

AInput.defaultProps = {
  placeholder: '',
  onChange: () => {},
  disabled: false,
  readonly: false,
  size: 'middle',
  type: 'text',
  autoSize: false,
  allowClear: false,
  value: '',
  onFocus: () => {},
  label: '',
  onPressEnter: null,
};

AInput.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  readonly: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  autoSize: PropTypes.bool || PropTypes.object,
  allowClear: PropTypes.bool,
  onFocus: PropTypes.func,
  label: PropTypes.string,
  onPressEnter: PropTypes.func,
};
