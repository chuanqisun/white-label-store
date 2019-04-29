import React from 'react';
import styled from 'styled-components';
import { space } from '../../styles';

export function withEqualDistribute(...WrappedComponents) {
  const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: ${WrappedComponents.map(c => `1fr`).join(' ')};
    grid-gap: ${space.scale(4)};
  `;

  return () => (
    <StyledDiv>
      {WrappedComponents.map((WrappedComponent, index) => (
        <div key={index}>
          <WrappedComponent />
        </div>
      ))}
    </StyledDiv>
  );
}
