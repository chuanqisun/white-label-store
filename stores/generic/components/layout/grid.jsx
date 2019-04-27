import React from 'react';
import styled from 'styled-components';

import { space } from '../../styles';

export function Grid(props) {
  return <StyledList {...props} />;
}

const StyledList = styled.ul`
  --card-min-width: ${space.scale(60)};
  --grid-gap: ${space.scale(5)};

  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(var(--card-min-width), 1fr));
  grid-gap: var(--grid-gap);
`;
