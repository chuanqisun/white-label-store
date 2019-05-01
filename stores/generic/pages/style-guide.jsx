import React, { useEffect, useRef, lazy } from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import { GlobalStyle } from '../styles';

export const hashToComponentMap = {
  '#carousel': {
    name: 'Carousel',
    component: lazy(() => import('../components/carousel/carousel.demo')),
  },
  '#product-grid': {
    name: 'Product grid',
    component: lazy(() => import('../components/product-grid/product-grid.demo')),
  },
  '#promo-bar': {
    name: 'Promo bar',
    component: lazy(() => import('../components/promo-bar/promo-bar.demo')),
  },
};

function AppRoot() {
  const iframeRef = useRef(null);

  useEffect(() => {
    function handleHashchange() {
      iframeRef.current.contentWindow.location.hash = location.hash;
    }

    window.addEventListener('hashchange', handleHashchange);

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashchange);
    };
  }, []);

  return (
    <StyledDiv>
      <GlobalStyle />
      <StyleGuideGlobalStyle />
      <ul className="table-of-content">
        {Object.entries(hashToComponentMap).map(([key, value]) => (
          <a key={key} href={key}>
            {value.name}
          </a>
        ))}
      </ul>
      <iframe className="demo-iframe" frameBorder={0} src={`./embed-host.html${location.hash}`} ref={iframeRef} />
    </StyledDiv>
  );
}

const StyleGuideGlobalStyle = createGlobalStyle`
  html,body,#app {
    height: 100%;
  }
`;

const StyledDiv = styled.div`
  display: flex;
  height: 100%;

  .table-of-content {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 10rem;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
  }

  .demo-iframe {
    width: 100%;
  }
`;

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
