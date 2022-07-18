import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';

function Drinks() {
  const { apiObj } = useContext(MyContext);
  return (
    <div>
      <Header titulo="Drinks" />
      { apiObj.drinks !== undefined && apiObj.drinks.length > 0
      && (
        apiObj.drinks.map((drink) => (
          <div key={ drink.idDrink }>
            <p>{ drink.strDrink }</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Drinks;
