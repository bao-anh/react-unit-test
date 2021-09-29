import styled from 'styled-components';
import { BORDER_RADIUS } from '../../../constants/styles';

export default styled.div`
  padding: 10px;
  background-color: white !important;
  height: fit-content;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12) !important;

  .header__logo {
    & > img {
      border-radius: ${BORDER_RADIUS};
    }
    height: 80px;
    width: fit-content;
  }
`;
