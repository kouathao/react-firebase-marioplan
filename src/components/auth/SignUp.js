import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    //   [e.target.id] gets element of id
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-draken-3">Sign Up</h5>
          <div className="input-field">
            <i className="material-icons prefix">mail_outline</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock_outline</i>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              autoComplete="true"
            />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">perm_identity</i>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">perm_contact_calendar</i>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <button className="btn waves-effect waves-light">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(SignUp);
