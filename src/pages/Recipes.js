import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import Header from '../components/Header';
import FoodsAndDrinks from '../components/FoodsAndDrinks';

export default function Recipes(props) {
  const { titulo } = props;
  const [itens, setItens] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const five = 5;

  useEffect(() => {
    const foodsApi = async () => {
      const foodsFetch = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
      const foodsArray = await foodsFetch.json();
      setFoods(foodsArray);
    };
    foodsApi();
    const drinksApi = async () => {
      const drinksFetch = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
      const drinksArray = await drinksFetch.json();
      setDrinks(drinksArray);
    };
    drinksApi();
  }, []);
  useEffect(() => {
    if (titulo === 'foods' && foods.meals) {
      return setItens(foods.meals.slice(0, five));
    }
    if (titulo === 'drinks' && drinks.drinks) {
      return setItens(drinks.drinks.slice(0, five));
    }
  }, [foods, titulo, drinks]);

  return (
    <>
      {itens.map((item) => (
        <button
          type="button"
          data-testid={ `${item.strCategory}-category-filter` }
          key={ item.strCategory }
        >
          { item.strCategory }
        </button>
      ))}
      <FoodsAndDrinks
        titulo={ titulo }
        filterApply=""
      />
    </>
  );
}

Recipes.propTypes = {
  titulo: PropTypes.string,
}.isRequired;
