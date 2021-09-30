import styled from 'styled-components';
import { COLORS } from '../../../constants/styles';

const getTextColor = (type) => {
  switch (type) {
    case 'normal': return 'black';
    case 'statistic': return COLORS.GRAY500;
    case 'up': return COLORS.GREEN500;
    case 'down': return COLORS.RED500;
    default: return '';
  }
};

const getFontSize = (variant) => {
  switch (variant) {
    case 'text': return '0.875rem';
    default: return '1ren';
  }
};

export default styled.div`
  color: ${(props) => getTextColor(props.type)};
  font-size: ${(props) => getFontSize(props.variant)};
`;
