import React from 'react';
import PropTypes from 'prop-types';
import StyledATypography from './styled';

const ATypography = ({
  variant,
  type,
  children,
  ...props
}) => (
  <StyledATypography
    variant={variant}
    type={type}
    {...props}
  >
    {children}
  </StyledATypography>
);

ATypography.defaultProps = {
  variant: 'text',
  type: 'normal',
  children: null,
};

ATypography.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.node,
};

export default ATypography;
