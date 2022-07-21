import React, { useContext } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';

function RecipeInProgress() {
  const { foodApi, drinkApi } = useContext();

  concatenaIngredientsAndMeasure = (ingredientes, measures) => {
    const ingredientsAndMeasures = [];
    ingredientes.forEach((element, i) => (
      ingredientsAndMeasures.push(`${element} - ${measures[i]}`)));
    // for (let i = 0; i < ingredientes.length; i += 1) {
    //   return ingredientsAndMeasures.push(`${ingredientes[i]} - ${measures[i]}`);
    // }
    console.log(ingredientsAndMeasures);
  };

  const renderFoodProgress = () => {
    const foodData = foodApi.meals[0];
    const food = Object.entries(foodApi.meals[0]);
    const ingredientes = food.filter((item) => (
      item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
    const measures = food.filter((item) => (
      item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));

    const ingredientsSteps = concatenaIngredientsAndMeasure(ingredientes, measures);
    return (
      <div>
        <header>
          <img
            src={ foodData.strMealThumb }
            alt={ foodData.strMeal }
            data-testid="recipe-photo"
            width="200px"
          />
        </header>
        <div>
          <title data-testid="recipe-title">{ foodData.strMeal }</title>
          <button type="button">
            <img
              src={ shareIcon }
              id="shareIcon"
              alt="shareIcon"
              data-testid="share-btn"
            />
          </button>
          <button type="button">
            <img
              src={ whiteHeartIcon }
              id="whiteHeartIcon"
              alt="whiteHeartIcon"
              data-testid="favorite-btn"
            />
          </button>
        </div>
        <p data-testid="recipe-category">{ foodData.strCategory }</p>
        { ingredientsSteps.map((element, index) => (
          <div key={ index }>
            <label htmlFor="ingredient-step">
              <input
                type="checkbox"
                key={ index }
                data-testid={ `${index}-ingredient-step` }
                id="ingredient-step"
              />
              {element[1]}
            </label>
            { measures.map((el, i) => (
              <p
                data-testid={ `${i}-ingredient-step` }
                key={ i }
              >
                {el[1]}
              </p>
            )) }
          </div>
        )) }
        <p data-testid="instructions">{ foodData.strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">Finish Recipe</button>
      </div>
    );
  };

  const renderDrinkProgress = () => {
    const drinkData = drinkApi.drinks[0];
    const drink = Object.entries(drinkApi.drinks[0]);
    const ingredientes = drink.filter((item) => (
      item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
    const measures = drink.filter((item) => (
      item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));

    const ingredientsSteps = concatenaIngredientsAndMeasure(ingredientes, measures);
    return (
      <div>
        <header>
          <img
            src={ drinkData.strDrinkThumb }
            alt={ drinkData.strDrink }
            data-testid="recipe-photo"
            width="200px"
          />
        </header>
        <div>
          <title data-testid="recipe-title">{ drinkData.strDrink }</title>
          <button type="button">
            <img
              src={ shareIcon }
              id="shareIcon"
              alt="shareIcon"
              data-testid="share-btn"
            />
          </button>
          <button type="button">
            <img
              src={ whiteHeartIcon }
              id="whiteHeartIcon"
              alt="whiteHeartIcon"
              data-testid="favorite-btn"
            />
          </button>
        </div>
        <p data-testid="recipe-category">{ drinData.strCategory }</p>
        { ingredientsSteps.map((element, index) => (
          <div key={ index }>
            <label htmlFor="ingredient-step">
              <input
                type="checkbox"
                key={ index }
                data-testid={ `${index}-ingredient-step` }
                id="ingredient-step"
              />
              {element[1]}
            </label>
          </div>
        )) }
        <p data-testid="instructions">{ drinkData.strInstructions }</p>
        <button type="button" data-testid="finish-recipe-btn">Finish Recipe</button>
      </div>
    );
  };

  return (
    <div>
      { foodApi && renderFoodProgress() }
      { drinkApi && renderDrinkProgress() }
    </div>
  );
}

export default RecipeInProgress;
