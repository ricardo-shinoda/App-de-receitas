import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';

function Foods() {
  const { apiObj } = useContext(MyContext);

  return (
    <div>
      <Header titulo="Foods" />
      { apiObj.meals !== undefined && apiObj.meals.length > 0
      && (
        apiObj.meals.map((food) => (
          <div key={ food.idMeal }>
            <p>{ food.strMeal }</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Foods;
