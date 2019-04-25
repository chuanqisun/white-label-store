import React from 'react';
import styled from 'styled-components';

import { pageClamp, fontSizeExpo, sizeLinear } from '../../styles';

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
  ${pageClamp}

  display: flex;
  justify-content: center;

  .column {
    margin: 0 ${sizeLinear(8)};
  }

  .list-title {
    font-size: ${fontSizeExpo(2)};
  }
`;
