import React from 'react';
import styled from 'styled-components';

import { PromoBar } from './promo-bar';

export function PromoBarDemo() {
  return (
    <StyledSection>
      <label>
        Message
        <input type="text" />
      </label>
      <PromoBar />
    </StyledSection>
  );
}

export default PromoBarDemo;

const StyledSection = styled.section``;
