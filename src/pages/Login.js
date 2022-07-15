import React, { useState } from 'react';

function Login() {
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

  const onChange = () => {
    localStorage.setItem('user', JSON.stringify({
      email,
    }));
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
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
        onClick={ onChange }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
