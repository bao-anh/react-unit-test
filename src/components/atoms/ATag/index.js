import React from 'react';
import { Tag } from 'antd';
import PropTypes from 'prop-types';

const ATag = ({ type, value }) => {
  const renderTag = () => {
    switch (type) {
      case 'self': return <Tag color="blue">Self</Tag>;
      case 'parent': return <Tag color="orange">Parent</Tag>;
      case 'date': return <Tag color="default">{value}</Tag>;
      default: return <Tag color="default">{value}</Tag>;
    }
  };

  return renderTag();
};

ATag.defaultProps = {
  type: 'self',
  value: '',
};

ATag.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

export default ATag;
