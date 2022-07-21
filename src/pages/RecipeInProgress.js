import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function RecipeInProgress() {
  // const { foodApi, drinkApi } = useContext(context);
  // const history = useHistory();

  // const renderFoodProgress = () => {
  //   const foodData = foodApi.meals[0];
  //   const food = Object.entries(foodApi.meals[0]);
  //   const ingredientes = food.filter((item) => (
  //     item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
  //   const measures = food.filter((item) => (
  //     item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));

  //   const ingredientsAndMeasures = [];
  //   ingredientes.forEach((element, i) => (
  //     ingredientsAndMeasures.push(`${element} - ${measures[i]}`)));
  //   return (
  //     <div>
  //       <header>
  //         <img
  //           src={ foodData.strMealThumb }
  //           alt={ foodData.strMeal }
  //           data-testid="recipe-photo"
  //           width="200px"
  //         />
  //       </header>
  //       <div>
  //         <title data-testid="recipe-title">{ foodData.strMeal }</title>
  //         <button
  //           type="button"
  //           data-testid="share-btn"
  //         >
  //           <img
  //             src={ shareIcon }
  //             id="shareIcon"
  //             alt="shareIcon"
  //           />
  //         </button>
  //         <button type="button">
  //           <img
  //             src={ whiteHeartIcon }
  //             id="whiteHeartIcon"
  //             alt="whiteHeartIcon"
  //             data-testid="favorite-btn"
  //           />
  //         </button>
  //       </div>
  //       <p data-testid="recipe-category">{ foodData.strCategory }</p>
  //       { ingredientsSteps.map((element, index) => (
  //         <div key={ index }>
  //           <label htmlFor="ingredient-step">
  //             <input
  //               type="checkbox"
  //               key={ index }
  //               data-testid={ `${index}-ingredient-step` }
  //               id="ingredient-step"
  //             />
  //             {element[1]}
  //           </label>
  //           { measures.map((el, i) => (
  //             <p
  //               data-testid={ `${i}-ingredient-step` }
  //               key={ i }
  //             >
  //               {el[1]}
  //             </p>
  //           )) }
  //         </div>
  //       )) }
  //       <p data-testid="instructions">{ foodData.strInstructions }</p>
  //       <button type="button" data-testid="finish-recipe-btn">Finish Recipe</button>
  //     </div>
  //   );
  // };

  // const renderDrinkProgress = () => {
  //   const drinkData = drinkApi.drinks[0];
  //   const drink = Object.entries(drinkApi.drinks[0]);
  //   const ingredientes = drink.filter((item) => (
  //     item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
  //   const measures = drink.filter((item) => (
  //     item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));

  //   const ingredientsAndMeasures = [];
  //   ingredientes.forEach((element, i) => (
  //     ingredientsAndMeasures.push(`${element} - ${measures[i]}`)));
  //   return (
  //     <div>
  //       <header>
  //         <img
  //           src={ drinkData.strDrinkThumb }
  //           alt={ drinkData.strDrink }
  //           data-testid="recipe-photo"
  //           width="200px"
  //         />
  //       </header>
  //       <div>
  //         <title data-testid="recipe-title">{ drinkData.strDrink }</title>
  //         <button type="button">
  //           <img
  //             src={ shareIcon }
  //             id="shareIcon"
  //             alt="shareIcon"
  //             data-testid="share-btn"
  //           />
  //         </button>
  //         <button type="button">
  //           <img
  //             src={ whiteHeartIcon }
  //             id="whiteHeartIcon"
  //             alt="whiteHeartIcon"
  //             data-testid="favorite-btn"
  //           />
  //         </button>
  //       </div>
  //       <p data-testid="recipe-category">{ drinkData.strAlcoholic }</p>
  //       { ingredientsSteps.map((element, index) => (
  //         <div key={ index }>
  //           <label htmlFor="ingredient-step">
  //             <input
  //               type="checkbox"
  //               key={ index }
  //               data-testid={ `${index}-ingredient-step` }
  //               id="ingredient-step"
  //             />
  //             {element[1]}
  //           </label>
  //         </div>
  //       )) }
  //       <p data-testid="instructions">{ drinkData.strInstructions }</p>
  //       <button type="button" data-testid="finish-recipe-btn">Finish Recipe</button>
  //     </div>
  //   );
  // };

  // return (
  //   <div>
  //     { (history.location.pathname.includes('/foods')) && renderFoodProgress() }
  //     { (history.location.pathname.includes('/drinks')) && renderDrinkProgress() }
  //   </div>
  // );
  const history = useHistory();
  const path = history.location.pathname;
  const [item, setItem] = useState();
  const [ingredient, setIngredient] = useState();
  const SEVEN = 7;
  const EIGHT = 8;
  const TWELVE = 12;
  const THIRTEEN = 13;

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
      // setIngredient(item);
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
              <p>{ i.strInstructions }</p>
              <ul>

                {ingredient && ingredient.map((ingred) => (
                  <li key={ ingred }>
                    {ingred[1]}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </>
      );
    }
    if (path.includes('drinks')) {
      return (
        <>
          {item.map((i) => (
            <div key={ i.idDrinks }>
              <img
                src={ i.strDrinksThumb }
                data-testid="recipe-photo"
                alt={ i.strCategory }
                width="200px"
              />
              <title data-testid="recipe-title">{ i.strDrinks }</title>
              <p>{ i.strInstructions }</p>
              <ul>

                {ingredient && ingredient.map((ingre) => (
                  <li key={ ingre }>
                    {ingre[1]}
                  </li>
                ))}
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
    </>
  );
}
export default RecipeInProgress;
