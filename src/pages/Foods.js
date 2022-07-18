import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';

function Foods() {
  const { apiObj } = useContext(MyContext);
  const history = useHistory();

  const apiRender = () => {
    const mapApi = apiObj.meals.map((food) => (
      <div key={ food.idMeal }>
        <p>{ food.strMeal }</p>
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
      && apiRender()}
    </div>
  );
}

export default Foods;
