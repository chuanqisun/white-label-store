import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Footer } from '../components/footer/footer';
import { ProductCard } from '../components/product-card/product-card';
import { withPageClamp, withPagePadding, withEqualDistribute } from '../components/layouts';
import { GlobalStyle } from '../styles';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FeaturedProducts = withPageClamp(withPagePadding(withEqualDistribute(ProductCard, ProductCard, ProductCard)));
const FooterOnPage = withPageClamp(withPagePadding(Footer));

function AppRoot() {
  return (
    <>
      <GlobalStyle />
      <PromoBar />
      <HeaderOnPage />
      <Hero />
      <FeaturedProducts />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
