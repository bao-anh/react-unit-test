import styled from 'styled-components';
import { COLORS } from '../../../constants/styles';

export default styled.div`
  width: 650px;
  margin-bottom: 24px;  

  .ant-card-head {
    background-color: ${COLORS.GRAY100}
  }

  .investment-info {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 24px;
    row-gap: 24px;

    &__item {
      display: flex;
      flex-direction: column;
    }
  }
`;
