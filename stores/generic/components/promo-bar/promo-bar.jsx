import React from 'react';
import styled from 'styled-components';

import { font, color, space } from '../../styles';

export function PromoBar() {
  return <StyledDiv>Promotional message</StyledDiv>;
}

const StyledDiv = styled.div`
  padding: ${space.scale(1)} ${space.scale(4)};
  background-color: ${color.black._};
  color: ${color.black.white};
  font-size: ${font.size.scale(0)};
  text-align: center;
`;
