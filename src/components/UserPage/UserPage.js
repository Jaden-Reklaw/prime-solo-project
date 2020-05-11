import React from 'react';
import { connect } from 'react-redux';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SpeechList from '../SpeechList/SpeechList';
import CreateSpeech from '../Buttons/CreateSpeech';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Nav />
    <section>
    <h1 id="welcome">Welcome, { props.user.username }!</h1>
    <h2>Current Speeches: {props.speeches.length}</h2>
    <h2>Finished Speeches: {props.finishedSpeech.length}</h2>
    <CreateSpeech user_id={props.user.id}/>
    </section>
    
    <section>
      <table className="primeTable">
        <thead>
          <tr>
            <th>Speech Name</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Table Topics</th>
            <th>Type</th>
            <th>Time Goal</th>
            <th>Present</th>
            <th>Remove</th>
          </tr>
        </thead>
        <SpeechList />
      </table>
    </section>
    <div className="buffer"></div>
    <Footer className="footer"/>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => ({
  user: reduxState.user,
  speeches: reduxState.speeches,
  finishedSpeech: reduxState.finishedSpeech,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
