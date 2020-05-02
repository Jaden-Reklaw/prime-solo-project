import React from 'react';

import Nav from '../Nav/Nav';

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
  </div>
);

export default HistoryPage;
