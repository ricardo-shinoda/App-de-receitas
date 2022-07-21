import React from 'react';
import { Link } from 'react-router-dom';

function btnStart(apiFood, apiDrink, start, linkProgress) {
  const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
  const inProgress = JSON.parse(localStorage.getItem('inProgressRecipes'));
  let id = '';
  if (apiFood) id = apiFood.meals[0].idMeal;
  if (apiDrink) id = apiDrink.drinks[0].idDrink;
  if (doneRecipes !== null) {
    const doneRecipe = doneRecipes.some((element) => element.id === id);
    if (doneRecipe === true) {
      return '';
    }
  }
  if (inProgress !== null) {
    let progress = '';
    if (inProgress.meals && apiFood) progress = Object.keys(inProgress.meals);
    if (inProgress.cocktails && apiDrink) progress = Object.keys(inProgress.cocktails);
    const verifyId = progress.some((element) => element === id);
    if (verifyId === true) {
      return (
        <Link to={ linkProgress }>
          <button
            type="button"
            data-testid="start-recipe-btn"
            className="btn-start"
          >
            Continue Recipe
          </button>
        </Link>
      );
    }
    return start;
  }
  return start;
}

export default btnStart;
