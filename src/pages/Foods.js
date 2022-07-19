import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';
import Recipes from './Recipes';

function Foods() {
  const { apiObj } = useContext(MyContext);
  const history = useHistory();

  const apiRender = () => {
    const DOZE = 12;
    const dozeApiObj = apiObj.meals.slice(0, DOZE);
    const mapApi = dozeApiObj.map((food, index) => (
      <div key={ food.idMeal } data-testid={ `${index}-recipe-card` }>
        <img
          src={ food.strMealThumb }
          alt="foto da receita"
          data-testid={ `${index}-card-img` }
          width="150px"
        />
        <p data-testid={ `${index}-card-name` }>{ food.strMeal }</p>
      </div>
    ));
    if (apiObj.meals.length === 1) {
      const itemId = apiObj.meals[0].idMeal;
      const urlItem = `/foods/${itemId}`;
      console.log(urlItem);
      history.push(urlItem);
    } else {
      return mapApi;
    }
  };

  return (
    <div>
      <Header titulo="Foods" />
      { apiObj.meals !== undefined && apiObj.meals.length > 0
        ? apiRender() : <Recipes titulo="foods" /> }
      <Footer />
    </div>
  );
}

export default Foods;
