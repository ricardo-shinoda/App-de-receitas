import React, { useState } from 'react';

function Login() {
  // handleChange = () => {
  //   const MAX_LENGTH = 5;
  //   const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/gi;
  // };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target }) => {
    if (target.name === 'email') {
      setEmail(target.value);
    } else {
      setPassword(target.value);
    }
  };

  const isDisabled = () => {
    const six = 6;
    let button = true;
    if (email.includes('@')
    && email.includes('.com')
    && password.length > six) {
      button = false;
    }
    return button;
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        name="email"
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ handleChange }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ handleChange }
      />
      <button
        name="button"
        type="button"
        data-testid="login-submit-btn"
        disabled={ isDisabled() }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
