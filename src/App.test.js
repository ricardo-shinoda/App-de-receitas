import React from 'react';
import App from './App'
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';

describe('Testa 45% de cobertura da tela de login', () => {
  test('testa se ao digitar o email, o botão está desativado', () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'test@test.com');
    const button = screen.getByTestId('login-submit-btn');
    expect(button.disabled).toBe(true);
  })
  test('testa se ao clicar no botão, as informações são salvas no localStorage e a url vai para /foods', async () => {
    render(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'test@test.com');
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
    userEvent.type(inputPassword, 'testetrybe');
    const button = screen.getByTestId('login-submit-btn');
    userEvent.click(button);
    const user = JSON.parse(localStorage.getItem('user'));
    expect(user.email).toBe('test@test.com');
  })
})

describe('Desenvolva 90% de cobertura de testes para o Header', () => {
  test('Verifica se ao clicar no ícone de perfil, é redirecionado para a página /profile', () => {
    render(<App />);
    const titleFoods = screen.getByText(/foods/i);
    expect(titleFoods).toBeInTheDocument();
    const searchBtn = screen.getByTestId('search-top-btn');
    const searchInputNull = screen.queryByTestId('search-input');
    expect(searchInputNull).not.toBeInTheDocument();
    userEvent.click(searchBtn);
    const searchInput = screen.queryByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  })
  test('Verifica se o component na página /profile não renderiza o botão search', () => {
    render(<App />)
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const title = screen.getByText(/profile/i);
    expect(title).toBeInTheDocument();
    const searchBtn = screen.queryByTestId('search-top-btn');
    expect(searchBtn).not.toBeInTheDocument();
  })
})