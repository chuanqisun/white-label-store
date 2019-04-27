import React from 'react';
import ReactDOM from 'react-dom';

import { PromoBar } from '../components/promo-bar/promo-bar';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Collection } from '../components/collection/collection';
import { withPageClamp, withPagePadding } from '../components/layout';

const HeaderOnPage = withPageClamp(withPagePadding(Header));
const FooterOnPage = withPageClamp(withPagePadding(Footer));
const CollectionOnPage = withPageClamp(withPagePadding(Collection));

function AppRoot() {
  return (
    <>
      <PromoBar />
      <HeaderOnPage />
      <CollectionOnPage />
      <FooterOnPage />
    </>
  );
}

var mountNode = document.getElementById('app');
ReactDOM.render(<AppRoot />, mountNode);
