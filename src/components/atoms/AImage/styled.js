import styled from 'styled-components';

export default styled.img`
  &:hover {
    cursor: ${(props) => props.onClick !== null && 'pointer'};
    filter: brightness(${(props) => (props.onClick === null ? 1 : 0.95)});
  }
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
