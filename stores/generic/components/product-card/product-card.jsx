import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../assets/images/Product.svg';
import { space, color } from '../../styles';

export function ProductCard() {
  return (
    <StyledLink href="./product.html">
      <img className="product-image" src={ProductImage} />
      <div className="product-name">Product name</div>
      <div className="product-price">$99.00</div>
    </StyledLink>
  );
}

const StyledLink = styled.a`
  .product-image {
    width: 100%;
  }
  .product-price {
    color: ${color.white.grey70};
  }
`;
