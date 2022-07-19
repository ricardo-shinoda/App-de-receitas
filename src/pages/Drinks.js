import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';
import Recipes from './Recipes';

function Drinks() {
  const { apiObj } = useContext(MyContext);
  const history = useHistory();

  const apiRender = () => {
    const DOZE = 12;
    const dozeApiObj = apiObj.drinks.slice(0, DOZE);
    const mapApi = dozeApiObj.map((drink, index) => (
      <div key={ drink.idDrink } data-testid={ `${index}-recipe-card` }>
        <img
          src={ drink.strDrinkThumb }
          alt="foto da receita"
          data-testid={ `${index}-card-img` }
          width="150px"
        />
        <p data-testid={ `${index}-card-name` }>{ drink.strDrink }</p>
      </div>
    ));
    if (apiObj.drinks.length === 1) {
      const itemId = apiObj.drinks[0].idDrink;
      const urlItem = `/drinks/${itemId}`;
      history.push(urlItem);
    } else {
      return mapApi;
    }
  };

  return (
    <div>
      <Header titulo="Drinks" />
      { apiObj.drinks !== undefined && apiObj.drinks.length > 0
        ? apiRender() : <Recipes titulo="drinks" /> }
      <Footer />
    </div>
  );
}

export default Drinks;
