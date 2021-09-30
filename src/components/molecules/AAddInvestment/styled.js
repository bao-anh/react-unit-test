import styled from 'styled-components';
import { COLORS } from '../../../constants/styles';

export default styled.div`
  margin-bottom: 24px;
  width: 650px;

  .ant-card {
    border: 2px dashed ${COLORS.GRAY500};
  }

  .add-investment {
    display: grid;
    grid-template-columns: auto auto auto;
    column-gap: 24px;
    row-gap: 24px;

    &__actions {
      margin-top: 12px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }
`;
