import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../assets/images/Product.svg';

import { Grid } from '../layout';

const mockCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export function ProductGrid() {
  return (
    <StyledGrid>
      {mockCollection.map(item => (
        <a key={item} href="./product.html">
          <li>
            <img className="product-image" src={ProductImage} />
            <div>Product name</div>
            <div>$99.00</div>
          </li>
        </a>
      ))}
    </StyledGrid>
  );
}

const StyledGrid = styled(Grid)`
  .product-image {
    width: 100%;
  }
`;
