import styled from 'styled-components';
import { COLORS } from '../../../constants/styles';

export const StyledIcon = styled.div`
  color: ${(props) => (props.isTypeUp ? COLORS.GREEN500 : COLORS.RED500)};
`;

export default styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;

  .ant-collapse-header {
    display: flex;
    align-items: center;
    user-select: none;
  }

  .ant-collapse-header-text {
    flex-grow: 1;
  }

  .history-item {
    display: flex;
    justify-content: space-between;

    &__left {
      display: flex;
      align-items: center;
      gap: 12px;

      &__amount {
        display: flex;
        gap: 4px;
      }
    }
  }
`;
