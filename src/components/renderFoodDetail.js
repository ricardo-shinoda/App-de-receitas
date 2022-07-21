import React from 'react';

function renderFoodDetail(apiFood, urlTransform) {
  const foodData = apiFood.meals[0];
  const food = Object.entries(apiFood.meals[0]);
  const ingredientes = food.filter((item) => (
    item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
  const measures = food.filter((item) => (
    item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));
  return (
    <div>
      <img
        src={ foodData.strMealThumb }
        alt={ foodData.strMeal }
        data-testid="recipe-photo"
        width="200px"
      />
      <h1 data-testid="recipe-title">{ foodData.strMeal }</h1>
      <p data-testid="recipe-category">{ foodData.strCategory }</p>
      { ingredientes.map((element, index) => (
        <p
          key={ index }
          data-testid={ `${index}-ingredient-name-and-measure` }
        >
          {element[1]}
        </p>
      )) }
      { measures.map((element, index) => (
        <div key={ index }>
          <p
            data-testid={ `${index}-ingredient-name-and-measure` }
          >
            {element[1]}
          </p>
        </div>
      )) }
      <p data-testid="instructions">{ foodData.strInstructions }</p>
      <iframe
        src={ urlTransform() }
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        data-testid="video"
      />
    </div>
  );
}

export default renderFoodDetail;
