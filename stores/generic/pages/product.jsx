import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { MediaAlbum } from '../components/media-album/media-album';
import { ProductMeta } from '../components/product-meta/product-meta';
import { withPageClamp, withPagePadding, withEqualDistribute } from '../components/layouts';
import { GlobalStyle } from '../styles';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FooterOnPage = withPageClamp(withPagePadding(Footer));
const BuyBox = withPageClamp(withPagePadding(withEqualDistribute(MediaAlbum, ProductMeta)));

function AppRoot() {
  return (
    <>
      <GlobalStyle />
      <PromoBar />
      <HeaderOnPage />
      <BuyBox />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
