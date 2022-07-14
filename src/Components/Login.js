import React from 'react';
import Header from './Header';

export default function Login() {
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
