import React from 'react';
import PropTypes from 'prop-types';
import StyledAImage from './styled';

const AImage = ({
  onClick,
  src,
  alt,
  height,
  width,
}) => (
  <StyledAImage
    onClick={onClick}
    src={src}
    alt={alt}
    height={height}
    width={width}
  />
);

AImage.defaultProps = {
  onClick: null,
  src: '',
  alt: '',
  height: 'inherit',
  width: '',
};

AImage.propTypes = {
  onClick: PropTypes.func,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default AImage;
