import React from 'react';
import { connect } from 'react-redux';

//Import other components
import SpeechList from '../SpeechList/SpeechList';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <section>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    </section>
    
    <section>
      <table>
        <thead>
          <tr>
            <th>Speech Name</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Table Topics</th>
            <th>Type</th>
            <th>Time Goal</th>
            <th>Start</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <SpeechList />
          <tr>
            <td>Self-Dev</td>
            <td>01/01/2020</td>
            <td><button>Add Notes</button></td>
            <td><button>Add Table Topic</button></td>
            <td>Dropdown here</td>
            <td>5 to 7 mins</td>
            <td><button>Start Presentation</button></td>
            <td><button className="btn"><i className="fa fa-trash"></i></button></td>
          </tr>
          <tr>
            <td>Self-Dev</td>
            <td>01/01/2020</td>
            <td><button>Add Notes</button></td>
            <td><button>Add Table Topic</button></td>
            <td>Dropdown here</td>
            <td>5 to 7 mins</td>
            <td><button>Start Presentation</button></td>
            <td><button className="btn"><i className="fa fa-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
