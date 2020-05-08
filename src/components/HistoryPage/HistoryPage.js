import React, { Component } from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class HistoryPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_FINISHED_SPEECHES', payload: this.props.user_id});
  }

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

//Set props to this component from redux store
const mapStateToProps = reduxState => ({
  user_id: reduxState.user.id
});

export default connect(mapStateToProps)(HistoryPage);
