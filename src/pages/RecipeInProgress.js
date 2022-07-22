import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FuncIngredients from '../helpers/FuncIngredients';

function RecipeInProgress() {
  const history = useHistory();
  const path = history.location.pathname;
  const [item, setItem] = useState();
  const [ingredient, setIngredient] = useState();
  const SEVEN = 7;
  const EIGHT = 8;
  const TWELVE = 12;
  const THIRTEEN = 14;

  useEffect(() => {
    if (path.includes('/foods')) {
      const pathId = path.slice(SEVEN, TWELVE);
      const getFood = async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pathId}`;
        const response = await fetch(url);
        const responseFoodRecommend = await response.json();
        setItem(responseFoodRecommend.meals);
      };
      getFood();
    }
    if (path.includes('/drinks')) {
      const pathId = path.slice(EIGHT, THIRTEEN);
      const getDrink = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pathId}`;
        const response = await fetch(url);
        const responseFoodRecommend = await response.json();
        setItem(responseFoodRecommend.drinks);
      };
      getDrink();
    }
  }, [path]);

  useEffect(() => {
    if (item !== undefined) {
      const food = Object.entries(item[0]);
      const ingredientes = food.filter((it) => (
        it[0].includes('strIngredient') && it[1] !== null && it[1] !== ''));
      setIngredient(ingredientes);
    }
  }, [item]);
  console.log(item, ingredient);
  const settingItem = () => {
    if (path.includes('foods')) {
      return (
        <>
          {item.map((i) => (
            <div key={ i.idMeal }>
              <img
                src={ i.strMealThumb }
                data-testid="recipe-photo"
                alt={ i.strCategory }
                width="200px"
              />
              <title data-testid="recipe-title">{ i.strMeal }</title>
              <p data-testid="instructions">{ i.strInstructions }</p>
              <p data-testid="recipe-category">{ i.strCategory }</p>
              <ul>
                {FuncIngredients(ingredient)}
              </ul>
            </div>
          ))}
        </>
      );
    }
    if (path.includes('drinks')) {
      return (
        <>
          {item.map((i, index) => (
            <div key={ index }>
              <img
                src={ i.strDrinkThumb }
                data-testid="recipe-photo"
                alt={ i.strCategory }
                width="200px"
              />
              <title data-testid="recipe-title">{ i.strDrinks }</title>
              <p data-testid="instructions">{ i.strInstructions }</p>
              <p data-testid="recipe-category">{ i.strCategory }</p>
              <ul>

                {FuncIngredients(ingredient)}
              </ul>
            </div>
          ))}
        </>
      );
    }
  };
  return (
    <>
      <h1>Teste</h1>
      { item && settingItem()}
      <button
        type="button"
        data-testid="favorite-btn"
      >
        Favoritar
      </button>
      <button
        type="button"
        data-testid="share-btn"
      >
        Compartilhar
      </button>
      <button
        type="button"
        data-testid="finish-recipe-btn"
      >
        Finalizar
      </button>
    </>
  );
}
export default RecipeInProgress;
