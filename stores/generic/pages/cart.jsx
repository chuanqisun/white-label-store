import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { CartDetails } from '../components/cart-details/cart-details';
import { withPageClamp, withPagePadding } from '../components/layout';
import { GlobalStyle } from '../styles';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FooterOnPage = withPageClamp(withPagePadding(Footer));
const ProductListInCartOnPage = withPageClamp(withPagePadding(CartDetails));

function AppRoot() {
  return (
    <>
      <GlobalStyle />
      <PromoBar />
      <HeaderOnPage />
      <ProductListInCartOnPage />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
