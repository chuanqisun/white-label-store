import React, { useState } from 'react';
import styled from 'styled-components';
import { space } from '../../styles';
import ProductImage from '../../assets/images/Product.svg';

const defaultMockProducts = [
  { id: 0, name: 'Product name', price: 49, quantity: 1 },
  { id: 1, name: 'Product name', price: 18, quantity: 2 },
  { id: 2, name: 'Product name', price: 120, quantity: 1 },
  { id: 3, name: 'Product name', price: 65, quantity: 1 },
];

export function CartDetails() {
  const [mockProducts, setMockProducts] = useState(defaultMockProducts);

  function handleOnChange({ id, quantity }) {
    const newMockProducts = [...mockProducts];
    newMockProducts.find(product => product.id === id).quantity = quantity;

    setMockProducts(newMockProducts);
  }

  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {mockProducts.map(product => (
            <tr key={product.id}>
              <td className="product-name-with-media">
                <img className="product-media" src={ProductImage} />
                <div>{product.name}</div>
              </td>
              <td>${product.price}.00</td>
              <td>
                <input type="number" value={product.quantity} onChange={e => handleOnChange({ id: product.id, quantity: e.target.value })} />
              </td>
              <td>${product.price * product.quantity}.00</td>
            </tr>
          ))}
          <tr>
            <td colSpan={3}>Subtotal</td>
            <td>${mockProducts.reduce((prevTotal, currentProduct) => prevTotal + currentProduct.price * currentProduct.quantity, 0)}.00</td>
          </tr>
        </tbody>
      </StyledTable>
      <StyledDiv>
        <a href="./checkout.html">Checkout</a>
        <button>Continue shopping</button>
      </StyledDiv>
    </>
  );
}

const StyledTable = styled.table`
  width: 100%;

  th {
    text-align: left;
  }

  .product-name-with-media {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  .product-media {
    width: 10rem;
    margin-right: 1rem;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-gap: ${space.scale(4)};
  grid-auto-flow: column;
  justify-content: end;
`;
