import React, { Component, PropTypes } from 'react';

export default class Login extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const creds = { email: email.trim(), password: password.trim() };
    this.props.loginUser(creds);
  }

  render() {
    const { errorMessage } = this.props.auth;

    return (
      <div className="single-widget-container" key="Login">
        <section className="widget login-widget">
          <header className="text-align-center">
            <h4>Account login</h4>
          </header>
          <form ref="loginForm" className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-user" />
                </span>
                <input type="text" className="form-control input-transparent" ref="email" placeholder="email" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-lock" />
                </span>
                <input type="password" className="form-control input-transparent" ref="password" placeholder="password" />
              </div>
            </div>
            <div className="row">

              <button type="submit" className="btn btn-primary">Submit</button>
              {errorMessage &&
                <span className="btn btn-link fade">{errorMessage}</span>
              }
            </div>
          </form>

        </section>
      </div>
    );
  }

}

Login.propTypes = {
  errorMessage: PropTypes.string,
};
