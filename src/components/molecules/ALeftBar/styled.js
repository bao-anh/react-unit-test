import styled from 'styled-components';

const MARGIN_TOP = '1px';

export default styled.div`
  .ant-menu {
    margin-top: ${MARGIN_TOP};
    height: calc(100% - ${MARGIN_TOP});
    width: 256px;
  }
`;
