import React from 'react';
import styled from 'styled-components';

import { space } from '../../styles';
import Logo from '../../assets/images/Logo.svg';

export function Header() {
  return (
    <StyledHeader>
      <a href="./home.html">
        <img className="logo" src={Logo} />
      </a>
      <div className="toolbox">
        <button>Search</button>
        <a href="#">Sign in</a>
        <a href="#">Bag</a>
      </div>
      <nav className="global-nav">
        <a href="./category.html">Category 1</a>
        <a href="./category.html">Category 2</a>
        <a href="./category.html">Category 3</a>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;

  .logo {
    max-height: 80px;
  }

  .toolbox {
    position: absolute;
    right: 0;
    top: 0;
  }
`;
