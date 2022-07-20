import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function FilterCategories(props) {
  const { categoria, type } = props;

  const [meal, setMeal] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [items, setItems] = useState([]);
  const [id, setId ] = useState('');
  const DOZE = 12;

  useEffect(() => {
    const mealApi = async () => {
      const foodsFetch = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`);
      const foodsArray = await foodsFetch.json();
      setMeal(foodsArray);
    };
    mealApi();
    const drinksApi = async () => {
      const drinksFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`);
      const drinksArray = await drinksFetch.json();
      setDrinks(drinksArray);
    };
    drinksApi();
  }, [categoria]);

  useEffect(() => {
    if (type === 'foods') return setId('Meal');
    if (type === 'drinks') return setId('Drink');
  }, [categoria, type]);

  useEffect(() => {
    if (type === 'foods') return setItems(meal.meals);
    if (type === 'drinks') return setItems(drinks.drinks);
  }, [categoria, drinks, meal]);
  return (
    <div>
      {items && items.slice(0, DOZE).map((item) => (
        <div key={ item.idMeal }>
          <p>{ item.strMeal }</p>
          <img src={ item.strMealThumb } alt={ item.strMeal } width="200" />
        </div>
      ))}
    </div>
  );
}

FilterCategories.propTypes = {
  categoria: PropTypes.string,
  type: PropTypes.string,
}.isRequired;
