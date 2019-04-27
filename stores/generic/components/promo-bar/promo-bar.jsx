import React from 'react';
import styled from 'styled-components';

import { font, background, space } from '../../styles';

export function PromoBar() {
  return <StyledDiv>Promotional message</StyledDiv>;
}

const StyledDiv = styled.div`
  padding: ${space.scale(1)} ${space.scale(4)};
  background-color: ${background.black._};
  color: ${background.black.white};
  font-size: ${font.size.scale(0)};
  text-align: center;
`;
