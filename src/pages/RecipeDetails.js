import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function RecipeDetails(props) {
  const history = useHistory();
  const [foodApi, setFoodApi] = useState();
  const [drinkApi, setDrinkApi] = useState();
  // const id = useParams();;

  useEffect(() => {
    if (history.location.pathname.includes('/foods')) {
      const getApiFood = async () => {
        const { match: { params: { id } } } = props;
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const responseFoodDetails = await response.json();
        setFoodApi(responseFoodDetails);
      };
      getApiFood();
    }
    if (history.location.pathname.includes('/drinks')) {
      const getApiDrink = async () => {
        const { match: { params: { id } } } = props;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const responseDrinkDetails = await response.json();
        setDrinkApi(responseDrinkDetails);
      };
      getApiDrink();
    }
  }, [history.location.pathname, props]);

  const transformUrlFood = () => {
    const linkYoutube = foodApi.meals[0].strYoutube;
    const transform = linkYoutube.replace('watch?v=', 'embed/');
    return transform;
  };

  const renderFoodDetail = () => {
    const foodData = foodApi.meals[0];
    const food = Object.entries(foodApi.meals[0]);
    console.log(foodApi);
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
          src={ transformUrlFood() }
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
          data-testid="video"
        />
      </div>
    );
  };

  const renderDrinkDetail = () => {
    const drinkData = drinkApi.drinks[0];
    const drink = Object.entries(drinkApi.drinks[0]);
    const ingredientes = drink.filter((item) => (
      item[0].includes('strIngredient') && item[1] !== null && item[1] !== ''));
    const measures = drink.filter((item) => (
      item[0].includes('strMeasure') && item[1] !== null && item[1] !== ''));
    return (
      <div>
        <img
          src={ drinkData.strDrinkThumb }
          alt={ drinkData.strDrink }
          data-testid="recipe-photo"
          width="200px"
        />
        <h1 data-testid="recipe-title">{ drinkData.strDrink }</h1>
        <p data-testid="recipe-category">{ drinkData.strCategory }</p>
        { ingredientes.map((element, index) => (
          <div key={ index }>
            <div>
              <div>
                <p
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {element[1]}
                </p>
              </div>
            </div>
          </div>
        )) }
        { measures.map((element, index) => (
          <div key={ index }>
            <div>
              <p
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {element[1]}
              </p>
            </div>
          </div>
        )) }
        <p data-testid="instructions">{ drinkData.strInstructions }</p>
      </div>
    );
  };

  return (
    <div>
      { foodApi && renderFoodDetail() }
      { drinkApi && renderDrinkDetail() }
    </div>
  );
}

RecipeDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default RecipeDetails;
