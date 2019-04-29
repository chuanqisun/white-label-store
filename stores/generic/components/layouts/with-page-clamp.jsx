import React from 'react';
import styled from 'styled-components';
import { space } from '../../styles';

export function withPageClamp(WrappedComponent) {
  return props => (
    <StyledDiv>
      <WrappedComponent {...props} />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  max-width: ${space.scale(320)};
  margin: auto;
`;
