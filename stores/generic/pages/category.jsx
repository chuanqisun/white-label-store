import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

function AppRoot() {
  return (
    <>
      <PromoBar />
      <Header />
      <Footer />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
