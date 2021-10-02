import styled from 'styled-components';
import { COLORS } from '../../../constants/styles';

export default styled.div`
  margin-bottom: 24px;

  .add-history {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 12px;

    &__actions {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
    }
  }

  .ant-card {
    border: 2px dashed ${COLORS.GRAY500};
  }
`;
