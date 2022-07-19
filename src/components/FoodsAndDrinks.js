import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function FoodsAndDrinks(props) {
  const { titulo } = props;

  const [foods, setFoods] = useState([]);
  const [arrayOfItens, setItens] = useState([]);
  const [drinks, setDrink] = useState([]);
  //   const [product, setProduct] = useState([]);
  useEffect(() => {
    if (titulo === 'foods') return setItens(foods.meals);
    if (titulo === 'drinks') return setItens(drinks.drinks);
  }, [titulo, foods.meals, drinks.drinks]);
  useEffect(() => {
    const foodsApi = async () => {
      const foodsFetch = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const foodsArray = await foodsFetch.json();
      setFoods(foodsArray);
    };
    foodsApi();
    const drinksApi = async () => {
      const drinksFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const drinksArray = await drinksFetch.json();
      setDrink(drinksArray);
    };
    drinksApi();
  }, []);

  const renderRecipe = () => {
    if (titulo === 'foods') {
      const DOZE = 12;
      const dozeApiObjFood = arrayOfItens.slice(0, DOZE);
      const foodRecipe = arrayOfItens && dozeApiObjFood.map((item, index) => (
        <div
          key={ item.idMeal }
          data-testid={ `${index}-recipe-card` }
        >
          <p data-testid={ `${index}-card-name` }>{ item.strMeal }</p>
          <img
            src={ item.strMealThumb }
            alt={ item.strMeal }
            width="200px"
            data-testid={ `${index}-card-img` }
          />
        </div>
      ));
      return foodRecipe;
    }
    const DOZE = 12;
    const dozeApiObjDrink = arrayOfItens.slice(0, DOZE);
    const drinkRecipe = arrayOfItens && dozeApiObjDrink.map((item, index) => (
      <div
        data-testid={ `${index}-recipe-card` }
        key={ item.idDrink }
      >
        <p data-testid={ `${index}-card-name` }>{ item.strDrink }</p>
        <img
          data-testid={ `${index}-card-img` }
          src={ item.strDrinkThumb }
          alt={ item.strDrink }
          width="200px"
        />
      </div>
    ));
    return drinkRecipe;
  };

  return (
    <>
      {arrayOfItens && renderRecipe()}
      {/* <h1>Teste</h1> */}
    </>
  );
}

FoodsAndDrinks.propTypes = {
  titulo: PropTypes.string,
}.isRequired;
