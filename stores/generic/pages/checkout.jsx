import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { CheckoutForm } from '../components/checkout-form/checkout-form';
import { withPageClamp, withPagePadding } from '../components/layouts';
import { GlobalStyle } from '../styles';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FooterOnPage = withPageClamp(withPagePadding(Footer));

function AppRoot() {
  return (
    <>
      <GlobalStyle />
      <PromoBar />
      <HeaderOnPage />
      <CheckoutForm />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
