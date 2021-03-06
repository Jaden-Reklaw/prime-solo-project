import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Individual Components to use on this page;
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="backgroundImageLogin">
          {this.props.errors.loginMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.loginMessage}
            </h2>
          )}
          <form onSubmit={this.login}>
            <img src="" alt=""/>
            <h1>Speech2Me</h1>
            <h5>Account Details</h5>
            <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
            </div>
            <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
            </div>
            <div>
              <input
                className="log-in"
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
          <center>
            <span className="questionSpan">Don't Have an account? </span>
            <button
              type="button"
              className="link-button"
              onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
            >
              Join Speech2Me!
            </button>
          </center>
        </div>
        <Footer />
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
