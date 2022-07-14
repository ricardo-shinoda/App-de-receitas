import React from 'react';
import Header from './Header';

function Login() {
  // handleChange = () => {
  //   const MAX_LENGTH = 5;
  //   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/gi;
  // };

  return (
    <div>
      <Header titulo="Login" />
      <h1>Login</h1>
      <input
        name="email"
        type="email"
        data-testid="email-input"
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
      />
      <button
        name="button"
        type="button"
        data-testid="login-submit-btn"
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
