import styled from 'styled-components';

export default styled.div`
  .investment-detail {
    display: flex;
    gap: 24px;

    &__left-info {
      display: flex;
      flex-direction: column;
    }

    &__right-info {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
    }
  }
`;
