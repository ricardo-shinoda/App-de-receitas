import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneRecipes() {
  // const [foodsDone, setFoodsDone] = useState();
  // const [drinksDone, setDrinksDone] = useState();
  const [filter, setFilter] = useState('All');

  const copyRecipe = ({ target }) => {
    if (target.name === 'food') {
      copy(`http://localhost:3000/foods/${target.id}`);
      target.parentNode.innerHTML = 'Link copied!';
    } else if (target.name === 'drink') {
      copy(`http://localhost:3000/drinks/${target.id}`);
      target.parentNode.innerHTML = 'Link copied!';
    }
  };

  const allDoneRecipes = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes !== null) {
      const recipesRender = doneRecipes.map((element, index) => (
        <div key={ index }>
          <Link
            to={ element.type === 'food'
              ? `foods/${element.id}`
              : `drinks/${element.id}` }
          >
            <div>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                width="200px"
              />
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { element.type === 'food'
                  ? `${element.nationality} - ${element.category}`
                  : element.alcoholicOrNot }
              </p>
              <p data-testid={ `${index}-horizontal-name` }>{ element.name }</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{ element.doneDate }</p>
              <p>{ element.alcoholicOrNot }</p>
              <div>
                { element.tags.slice(0, 2).map((tag, i) => (
                  <p
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                    key={ i }
                  >
                    { tag }
                  </p>
                )) }
              </div>
            </div>
          </Link>
          <button
            type="button"
            id={ element.id }
            name={ element.type }
            onClick={ (e) => copyRecipe(e) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="botão compartilhar"
              id={ element.id }
              name={ element.type }
            />
          </button>
        </div>
      ));
      return recipesRender;
    }
  };

  const doneFoods = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes !== null) {
      const foodsFilter = doneRecipes.filter((element) => element.type === 'food');
      const foodsRender = foodsFilter.map((element, index) => (
        <div key={ index }>
          <Link to={ `foods/${element.id}` }>
            <div>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                width="200px"
              />
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { `${element.nationality} - ${element.category}` }
              </p>
              <p data-testid={ `${index}-horizontal-name` }>{ element.name }</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{ element.doneDate }</p>
              <div>
                { element.tags.slice(0, 2).map((tags, i) => (
                  <p
                    data-testid={ `${index}-${tags}-horizontal-tag` }
                    key={ i }
                  >
                    { tags }
                  </p>
                )) }
              </div>
            </div>
          </Link>
          <button
            type="button"
            id={ element.id }
            name={ element.type }
            onClick={ (e) => copyRecipe(e) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="botão compartilhar"
            />
          </button>
        </div>
      ));
      return foodsRender;
    }
  };

  const doneDrinks = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    if (doneRecipes !== null) {
      const drinksFilter = doneRecipes.filter((element) => element.type === 'drink');
      const drinksRender = drinksFilter.map((element, index) => (
        <div key={ index }>
          <Link to={ `drinks/${element.id}` }>
            <div>
              <img
                src={ element.image }
                alt={ element.name }
                data-testid={ `${index}-horizontal-image` }
                width="200px"
              />
              <p data-testid={ `${index}-horizontal-name` }>{ element.name }</p>
              <p data-testid={ `${index}-horizontal-done-date` }>{ element.doneDate }</p>
              <p
                data-testid={ `${index}-horizontal-top-text` }
              >
                { element.alcoholicOrNot }
              </p>
            </div>
          </Link>
          <button
            type="button"
            id={ element.id }
            name={ element.type }
            onClick={ (e) => copyRecipe(e) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="botão compartilhar"
            />
          </button>
        </div>
      ));
      return drinksRender;
    }
  };

  const onClickFilter = ({ target }) => {
    setFilter(target.innerText);
  };

  const renderFilter = () => {
    if (filter === 'All') {
      return allDoneRecipes();
    }
    if (filter === 'Food') {
      return doneFoods();
    }
    if (filter === 'Drinks') {
      return doneDrinks();
    }
  };

  return (
    <div>
      <Header titulo="Done Recipes" />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ (e) => onClickFilter(e) }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ (e) => onClickFilter(e) }
      >
        Food
      </button>
      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ (e) => onClickFilter(e) }
      >
        Drinks
      </button>
      { renderFilter() }
    </div>
  );
}

export default DoneRecipes;
