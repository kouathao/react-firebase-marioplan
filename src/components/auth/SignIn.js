import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
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
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-draken-3">Sign In</h5>
          <div className="input-field">
            <i class="material-icons prefix">mail_outline</i>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <i class="material-icons prefix">lock_outline</i>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              autoComplete
            />
          </div>
          <div className="row">
            <div className="input-field col s12 center-align">
              <button className="btn waves-effect waves-light">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
