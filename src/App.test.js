import React from 'react';
import App from './App'
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa 45% de cobertura da tela de login', () => {
  test('testa se ao digitar o email, o botão está desativado', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
    userEvent.type(inputEmail, 'test@test.com');
    const button = screen.getByTestId('login-submit-btn');
    expect(button.disabled).toBe(true);
  })
  test('testa se ao clicar no botão, as informações são salvas no localStorage', async () => {
    renderWithRouter(<App />);
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
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
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
    const { history } = renderWithRouter(<App />);
    history.push('/profile');
    const profileBtn = screen.getByTestId('profile-top-btn');
    userEvent.click(profileBtn);
    const title = screen.getByText(/profile/i);
    expect(title).toBeInTheDocument();
    const searchBtn = screen.queryByTestId('search-top-btn');
    expect(searchBtn).not.toBeInTheDocument();
  })
})

describe('Verifica se os testes cobrem 45% da searchBar', () => {
  test('Verifica se os componentes estão na tela', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const btnSearch = screen.getByTestId('search-top-btn');
    userEvent.click(btnSearch);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    const nameRadio = screen.getByTestId('name-search-radio');
    const letterRadio = screen.getByTestId('first-letter-search-radio');
    const btnCall = screen.getByTestId('exec-search-btn');
    expect(ingredientRadio).toBeInTheDocument();
    expect(nameRadio).toBeInTheDocument();
    expect(letterRadio).toBeInTheDocument();
    expect(btnCall).toBeInTheDocument();
  })

  it('Verifica se a imagem Search está na tela', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/foods');
    const img = screen.getByRole('img', { name: /searchicon/i });
    expect(img).toBeInTheDocument();
    const search = screen.getByTestId('search-input');
    expect(search).toBeInTheDocument();
  })
})
