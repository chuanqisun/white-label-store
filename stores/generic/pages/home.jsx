import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Footer } from '../components/footer/footer';

function AppRoot() {
  return (
    <>
      <PromoBar />
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
