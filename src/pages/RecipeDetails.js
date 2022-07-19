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
        const { match: { params: id } } = props;
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id.id}`;
        const response = await fetch(url);
        const responseFoodDetails = await response.json();
        setFoodApi(responseFoodDetails);
      };
      getApiFood();
    }
    if (history.location.pathname.includes('/drinks')) {
      const getApiDrink = async () => {
        const { match: { params: id } } = props;
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id.id}`;
        const response = await fetch(url);
        const responseDrinkDetails = await response.json();
        setDrinkApi(responseDrinkDetails);
      };
      getApiDrink();
    }
  }, [history.location.pathname, props]);

  return (
    <div>
      {/* <img src="" alt="algum" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title"> </h1>
      <p data-testid="recipe-category"> </p>
      <ul>
        <li data-testid={ `${index}-ingredient-name-and-measure` } />
      </ul>
      <p data-testid="instructions" />
      {history.location.pathname === '/foods' && (
        <iframe
          data-testid="video"
          width="420"
          height="315"
          src=""
          title="Vídeo de receita"
        />
      )}
      <div data-testid={ `${index}-recomendation-card` }> </div> */}
    </div>
  );
}

RecipeDetails.propTypes = {
  params: PropTypes.objectOf.isRequired,
  match: PropTypes.objectOf.isRequired,
};

export default RecipeDetails;
