import React, { Component } from 'react';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class HistoryPage extends Component {
  render () {
    return (
      <div>
        <Nav />
        <p>
          Speech History Page
        </p>
        <Footer />
      </div>
    );
  }

} 

export default HistoryPage;
