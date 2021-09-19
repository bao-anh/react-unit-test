import styled from 'styled-components';
import { COLORS, BORDER_RADIUS } from '../../../constants/styles';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: ${COLORS.TODO};
  width: 400px;
  border-radius: ${BORDER_RADIUS};
`;
