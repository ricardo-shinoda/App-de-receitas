import React, { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

function RecipeDetails() {
  // const { id } = useParams();

  useEffect(() => {
    const getApiFood = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const responseFoodDetails = await response.json();
    return responseFoodeDetails;
  };
  getApiFood();
  if (getApiFood === 'Undefined') {
    const getApiDrink = async (id) => {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    const reponseDrinkDetails = await response.json();
  }
  }
  }, []);

  return ()
};


  
getApiDrink();
}
};
getApiFood();

export default RecipeDetails;
