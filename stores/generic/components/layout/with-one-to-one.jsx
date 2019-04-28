import React from 'react';
import styled from 'styled-components';
import { space } from '../../styles';

export function withOneToOne(WrappedComponentLeft, WrappedComponentRight) {
  return () => (
    <StyledDiv>
      <div>
        <WrappedComponentLeft />
      </div>
      <div>
        <WrappedComponentRight />
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${space.scale(4)};
`;
