import React from 'react';
import styled from 'styled-components';
import { space } from '../../styles';

export function ProductMeta() {
  return (
    <StyledDiv>
      <h1>Product name</h1>
      <p>Product description</p>
      <label htmlFor="qty">Quantity</label>
      <select id="qty" name="quantity">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <button>Add to bag</button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: grid;
  justify-content: start;
  grid-gap: ${space.scale(4)};
`;
