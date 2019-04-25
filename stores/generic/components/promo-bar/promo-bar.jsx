import React from 'react';
import styled from 'styled-components';

import { fontSizeExpo, background, sizeLinear } from '../../styles';

export function PromoBar() {
  return <StyledDiv>Promotional message</StyledDiv>;
}

const StyledDiv = styled.div`
  padding: ${sizeLinear(1)} ${sizeLinear(4)};
  background-color: ${background.black._};
  color: ${background.black.white};
  font-size: ${fontSizeExpo(0)};
  text-align: center;
`;
