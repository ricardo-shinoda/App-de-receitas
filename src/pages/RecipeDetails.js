import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../style/RecipeDetails.css';
import PropTypes from 'prop-types';
import btnStart from '../components/btnStart';

function RecipeDetails(props) {
  const history = useHistory();
  const [foodApi, setFoodApi] = useState();
  const [drinkApi, setDrinkApi] = useState();
  const [foodRecommend, setFoodRecommend] = useState();
  const [drinkRecommend, setDrinkRecommend] = useState();
  const [recipeType, setRecipeType] = useState('');

  useEffect(() => {
    if (history.location.pathname.includes('/foods')) {
      const getApiFood = async () => {
        const { match: { params: { id } } } = props;
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const responseFoodDetails = await response.json();
        setFoodApi(responseFoodDetails);
        setRecipeType(`/foods/${responseFoodDetails.meals[0].idMeal}/in-progress`);
      };
      const getApiDrinkRecommend = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        const response = await fetch(url);
        const dataDrinkRecommend = await response.json();
        setDrinkRecommend(dataDrinkRecommend);
      };
      getApiFood();
      getApiDrinkRecommend();
    }
    if (history.location.pathname.includes('/drinks')) {
      const getApiDrink = async () => {
        const { match: { params: { id } } } = props;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const response = await fetch(url);
        const responseDrinkDetails = await response.json();
        setDrinkApi(responseDrinkDetails);
        setRecipeType(`/drinks/${responseDrinkDetails.drinks[0].idDrink}/in-progress`);
      };
      const getFoodRecommend = async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const response = await fetch(url);
        const responseFoodRecommend = await response.json();
        setFoodRecommend(responseFoodRecommend);
      };
      getApiDrink();
      getFoodRecommend();
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
        <p data-testid="recipe-category">{ drinkData.strAlcoholic }</p>
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

  const renderDrinkRecommend = () => {
    const SIX = 6;
    const sixDrinks = drinkRecommend.drinks.slice(0, SIX);
    return (
      <div className="container-scroll">
        { sixDrinks.map((drink, index) => (
          <div
            key={ drink.idDrink }
            data-testid={ `${index}-recomendation-card` }
            style={ { width: '150px', margin: '30px' } }
          >
            <img src={ drink.strDrinkThumb } alt={ drink.strDrink } width="100px" />
            <p data-testid={ `${index}-recomendation-title` }>{ drink.strDrink }</p>
          </div>
        )) }
      </div>
    );
  };

  const renderFoodRecommend = () => {
    const SIX = 6;
    const sixFoods = foodRecommend.meals.slice(0, SIX);
    return (
      <div className="container-scroll">
        { sixFoods.map((food, index) => (
          <div
            key={ food.idMeal }
            data-testid={ `${index}-recomendation-card` }
            style={ { width: '150px', margin: '30px' } }
          >
            <img src={ food.strMealThumb } alt={ food.strMeal } width="100px" />
            <p data-testid={ `${index}-recomendation-title` }>{ food.strMeal }</p>
          </div>
        )) }
      </div>
    );
  };

  const btnStartRecipe = (
    <Link to={ recipeType }>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="btn-start"
      >
        Start Recipe
      </button>
    </Link>
  );

  return (
    <div>
      <button type="button" data-testid="share-btn">Compartilhar</button>
      <button type="button" data-testid="favorite-btn">Favoritar</button>
      { foodApi && renderFoodDetail() }
      { drinkRecommend && renderDrinkRecommend() }
      { drinkApi && renderDrinkDetail() }
      { foodRecommend && renderFoodRecommend() }
      { (foodApi || drinkApi) && btnStart(foodApi, drinkApi, btnStartRecipe, recipeType) }
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
