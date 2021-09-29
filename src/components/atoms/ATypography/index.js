import React from 'react';
import PropTypes from 'prop-types';
import StyledATypography from './styled';

const ATypography = ({ variant, investType, children }) => (
  <StyledATypography variant={variant} investType={investType}>
    {children}
  </StyledATypography>
);

ATypography.defaultProps = {
  variant: 'text',
  investType: 'normal',
  children: null,
};

ATypography.propTypes = {
  variant: PropTypes.string,
  investType: PropTypes.string,
  children: PropTypes.node,
};

export default ATypography;
