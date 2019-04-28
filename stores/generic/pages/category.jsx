import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { ProductGrid } from '../components/product-grid/product-grid';
import { withPageClamp, withPagePadding } from '../components/layout';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FooterOnPage = withPageClamp(withPagePadding(Footer));
const ProductGridOnPage = withPageClamp(withPagePadding(ProductGrid));

function AppRoot() {
  return (
    <>
      <PromoBar />
      <HeaderOnPage />
      <ProductGridOnPage />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
