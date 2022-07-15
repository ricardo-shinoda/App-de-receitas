import React, { useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";

function RecipeDetails() {
const history = useHistory();
const id = useParams();

  useEffect(() => {
    if(history.location.pathname === '/food')
      const getApiFood = async (id) => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const responseFoodDetails = await response.json();
      return responseFoodDetails;
      getApiFood();
    };
    if (history.location.pathname === '/food') {
        const getApiDrink = async (id) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const responseDrinkDetails = await response.json();
        return responseDrinkDetails;
      };
      getApiDrink();
    }
  }, []);

  return (
    <div>
      <h1 data-testid="recipe-title"> </h1>
      <img src="" alt="algum" data-testid="recipe-photo" />
      <p data-testid="recipe-category"> </p>
    </div>
  );
}

export default RecipeDetails;
