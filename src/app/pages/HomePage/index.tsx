import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Createnote from './Createnote';
import Footer from './Footer';
import Header from './Header';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Header />
      <Createnote />
      <Footer />
    </>
  );
}
