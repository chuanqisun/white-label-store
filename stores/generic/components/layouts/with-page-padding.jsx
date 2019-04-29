import React from 'react';
import styled from 'styled-components';

import { space } from '../../styles';

export function withPagePadding(WrappedComponent) {
  return props => (
    <StyledDiv>
      <WrappedComponent {...props} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  padding-left: ${space.scale(5)};
  padding-right: ${space.scale(5)};
`;
