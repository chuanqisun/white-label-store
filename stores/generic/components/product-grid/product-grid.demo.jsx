import React from 'react';
import styled from 'styled-components';
import { ProductGrid } from './product-grid';

export function ProductGridDemo() {
  return (
    <StyledSection>
      <label>
        Grid gap <input type="number" />
      </label>
      <ProductGrid />
    </StyledSection>
  );
}

export default ProductGridDemo;

const StyledSection = styled.section``;
