import React, { useContext } from 'react';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon';

function RecipeInProgress() {
  const { foodApi, drinkApi } = useContext();

  const renderFoodProgess = () => {
    const foodData = foodApi.meals[0];
    const food = Object.entries(foodApi.meals[0]);
    const ingredientes = food.filter((item) => (
      item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
    const measures = food.filter((item) => (
      item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));
    return (
      <div>
        <header>
          <img src={ foodData.strMealThumb }
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
            <button type="button" onClick={ * } >
              <img
                src={ whiteHeartIcon }
                id="whiteHeartIcon"
                alt="whiteHeartIcon"
                data-testid="favorite-btn"
              />
            </button>
      </div>
        <p data-testid="recipe-category">{ foodData.strCategory }</p>
        { ingredientes.map((element, index) => (
          <div key={ index }>  
            <input type="checkbox"
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            />
            <label>
              {element[1]}
            </label>
            { measures.map((el, i) => (
            <p
              data-testid={ `${i}-ingredient-step` }
            >
              {el[1]}
            </p>
        )) }
          </div>
        )) }
        <p data-testid="instructions">{ foodData.strInstructions }</p>
        <button data-testid="finish-recipe-btn">Finish Recipe</button>
    </div>
  );
  } 
  
  const renderDrinkProgess = () => {
    const drinkData = drinkApi.meals[0];
    const drink = Object.entries(drinkApi.meals[0]);
    const ingredientes = drink.filter((item) => (
      item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
    const measures = drink.filter((item) => (
      item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));
    return (
      <div>
        <header>
          <img src={ drinkData.strMealThumb }
            alt={ drinkData.strMeal }
            data-testid="recipe-photo"
            width="200px"
          />
        </header>
        <div>
          <title data-testid="recipe-title">{ drinkData.strMeal }</title>
            <button type="button">
              <img
                src={ shareIcon }
                id="shareIcon"
                alt="shareIcon"
                data-testid="share-btn"
              />
            </button>
            <button type="button" onClick={ * } >
              <img
                src={ whiteHeartIcon }
                id="whiteHeartIcon"
                alt="whiteHeartIcon"
                data-testid="favorite-btn"
              />
            </button>
      </div>
        <p data-testid="recipe-category">{ drinData.strCategory }</p>
        { ingredientes.map((element, index) => (
          <div key={ index }>  
            <input type="checkbox"
              key={ index }
              data-testid={ `${index}-ingredient-step` }
            />
            <label>
              {element[1]}
            </label>
            { measures.map((el, i) => (
            <p
              data-testid={ `${i}-ingredient-step` }
            >
              {el[1]}
            </p>
        )) }
          </div>
        )) }
        <p data-testid="instructions">{ drinkData.strInstructions }</p>
        <button data-testid="finish-recipe-btn">Finish Recipe</button>
    </div>
  );
  } 
  return(
    <div>
      { foodApi && renderFoodProgress()}
      { drinkApi && }
DrinkProgress()     </div>  
  )
}

export default RecipeInProgress;
