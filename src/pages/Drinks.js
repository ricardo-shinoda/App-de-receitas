import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';

function Drinks() {
  const { apiObj } = useContext(MyContext);
  const history = useHistory();

  const apiRender = () => {
    const mapApi = apiObj.drinks.map((drink) => (
      <div key={ drink.idDrink }>
        <p>{ drink.strDrink }</p>
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
      && apiRender() }
    </div>
  );
}

export default Drinks;
