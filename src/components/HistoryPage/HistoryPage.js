import React from 'react';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const HistoryPage = () => (
  <div>
    <Nav />
    <p>
      Speech History Page
    </p>
    <Footer />
  </div>
);

export default HistoryPage;
