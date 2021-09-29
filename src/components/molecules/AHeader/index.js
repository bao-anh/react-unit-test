import React from 'react';
import { useHistory } from 'react-router-dom';
import StyledHeader from './styled';
import { AImage } from '../../atoms';
import Logo from '../../../assets/images/investment-logo.jpeg';

const AHeader = () => {
  const history = useHistory();

  const handleRedirectToDashboard = () => {
    history.push('/');
    window.location.reload();
  };

  return (
    <StyledHeader>
      <div className="header__logo">
        <AImage
          src={Logo}
          alt="logo"
          onClick={handleRedirectToDashboard}
        />
      </div>
    </StyledHeader>
  );
};

export default AHeader;
