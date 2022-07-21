import React from 'react';
import App from './App'
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import chickenMeals from '../cypress/mocks/chickenMeals';
import cocktailDrinks from '../cypress/mocks/cocktailDrinks';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import RecipeDetails from './pages/RecipeDetails';
import FoodDetail from './pages/FoodDetail';
import RecipeInProgress from './pages/RecipeInProgress';
import Drinks from './pages/Drinks';
import FilterCategories from './components/FilterCategories';

const mockFetchFood = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(chickenMeals),
    }));
};

const mockFetchDrink = () => {
  jest.spyOn(global, 'fetch')
    .mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(cocktailDrinks),
    }));
};

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
  }) //! está com erro
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

describe('Verifica se os testes cobrem 90% da searchBar', () => {

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
  test('Verifica se faz a chamada API corretamente na página foods', async () => {
    const { history } = renderWithRouter(<App />);
    mockFetchFood
    history.push('/foods');
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'chicken');
    const ingredientRadio = screen.getByTestId('ingredient-search-radio');
    userEvent.click(ingredientRadio);
    const btnSearch = screen.getByTestId('exec-search-btn');
    userEvent.click(btnSearch);
    const firstItem = await screen.findByTestId('0-card-name');
    expect(firstItem).toBeInTheDocument();
    jest.clearAllMocks()
  })
  test('Verifica se faz a chamada API corretamente na página drinks', async () => {
    const { history } = renderWithRouter(<App />);
    mockFetchDrink
    history.push('/drinks');
    const searchIcon = screen.getByTestId('search-top-btn');
    userEvent.click(searchIcon);
    const searchInput = screen.getByTestId('search-input');
    userEvent.type(searchInput, 'cocktail');
    const nameRadio = screen.getByTestId('name-search-radio');
    userEvent.click(nameRadio);
    const btnSearch = screen.getByTestId('exec-search-btn');
    userEvent.click(btnSearch);
    const item = await screen.findByTestId('0-card-name');
    expect(item).toBeInTheDocument();
    jest.clearAllMocks()
  })

})

describe('Testa a página FoodDetails', () => {
  it('Testa a página FoodDetail.js renderiza o componente Header', () => {
    renderWithRouter(<FoodDetail />);
    const header = screen.getByTestId('page-title');
    expect(header).toBeInTheDocument();
  })

})
describe('Testa a página FavoriteRecipes', () => {
  it('Testa a página FavoriteRecipes.js renderiza o componente Header', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/drinks')
    const header = screen.getByTestId('page-title');
    expect(header).toBeInTheDocument();
  })
})

describe('Testa a página DoneRecipes', () => {
  it('Testa se renderiza o Header', () => {
    renderWithRouter(<DoneRecipes />);
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  })
})

describe('Testa a página FavoriteRecipes', () => {
  it('Testa se renderiza o titulo', () => {
    renderWithRouter(<FavoriteRecipes />);
    const title = screen.getByTestId('page-title');
    expect(title).toBeInTheDocument();
  })
})

//* Verificar como está passando esse teste
describe('Testa a página FilterCategories', () => {
  it('Verifica se o card-name aparece na tela', () => {
    renderWithRouter(<FilterCategories />);
    const card = screen.getByTestId('0-card-name');
    expect(card).toBeInTheDocument();
  })
  it('Verifica se o recipe-card aparece na tela', () => {
    renderWithRouter(<FilterCategories />);
    const recipeCard = screen.getByTestId('0-recipe-card');
    expect(recipeCard).toBeInTheDocument();
  })
  it('Verifica se o card-img aparece na tela', () => {
    renderWithRouter(<FilterCategories />);
    const cardImg = screen.getByTestId('0-card-img');
    expect(cardImg).toBeInTheDocument();
  })
})


//! está com erro
describe('Testa a página de Drinks.js', () => {
  it('Verifica de existe o título "drinks" na tela', () => {
    renderWithRouter(<Drinks />);
    const img = screen.getByTestId('0-card-img');
    expect(img).toBeInTheDocument();
  })
})

//! está com erro
describe('Testa a página RecipeDetails', () => {
    it('Verifica se carrega a foto na página', () => {
      renderWithRouter(<RecipeDetails />)
      const img = screen.getByTestId('recipe-photo')
      expect(img).toBeInTheDocument();
    })
})


//! está com erro
//  describe('Testa a página RecipeProgress.js', () => {
//   it('Verifica se existe uma foto no header', () => {
//     renderWithRouter(<RecipeInProgress />);
//     const headerPhoto = screen.getByTestId('recipe-photo');
//     expect(headerPhoto).toBeInTheDocument();
//   })

//   it('Verifica se existe um titulo de receita', () => {
//     renderWithRouter(<RecipeInProgress />);
//     const title = screen.getByTestId('recipe-title');
//     expect(title).toBeInTheDocument();
//     })

//   it('Verifica se existem dois botões: compartilhar e favorito na tela', () => {
//     renderWithRouter(<RecipeInProgress />);
//     const shareButton = screen.getByTestId('share-btn');
//     expect(shareButton).toBeInTheDocument();
//     const favButton = screen.getByTestId('favorite-btn');
//     expect(favButton).toBeInTheDocument();
//     })

// })

