import React from 'react';
import styled from 'styled-components';

import { font, space } from '../../styles';

export function Footer() {
  return (
    <StyledFooter>
      <div className="column">
        <h2 className="list-title">List title</h2>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
      <div className="column">
        <h2 className="list-title">List title</h2>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
      <div className="column">
        <h2 className="list-title">List title</h2>
        <ul>
          <li>List item</li>
          <li>List item</li>
          <li>List item</li>
        </ul>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;

  .column {
    margin: 0 ${space.scale(8)};
  }

  .list-title {
    font-size: ${font.size.scale(2)};
  }
`;
