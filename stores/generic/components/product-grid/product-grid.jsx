import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../assets/images/Product.svg';
import { space } from '../../styles';

const mockCollection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

export function ProductGrid() {
  return (
    <StyledList>
      {mockCollection.map(item => (
        <a key={item} href="./product.html">
          <li>
            <img className="product-image" src={ProductImage} />
            <div>Product name</div>
            <div>$99.00</div>
          </li>
        </a>
      ))}
    </StyledList>
  );
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

  .product-image {
    width: 100%;
  }
`;
