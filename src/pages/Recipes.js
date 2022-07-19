import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
// import MyContext from '../Context/MyContext';

export default function Recipes() {
  // const { apiObj } = useContext(MyContext);

  const [itens, setItens] = useState([]);
  const [foods, setFoods] = useState([]);
  const [drinks, setDrinks] = useState([]);
  // const
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
  const handleButton = ({ target }) => {
    const { name } = target;
    if (name === 'drinks') {
      return setItens(drinks.drinks.slice(0, five));
    }
    return setItens(foods.meals.slice(0, five));
  };

  return (
    <>
      <Header />
      <div>
        <button
          type="button"
          data-testid="food-category-filter"
          name="foods"
          onClick={ (e) => handleButton(e) }
        >
          Food
        </button>
        <button
          type="button"
          data-testid="drinks-category-filter"
          name="drinks"
          onClick={ (e) => handleButton(e) }
        >
          Drinks
        </button>
      </div>
      {itens.map((item) => (
        <div key={ item }>
          { item.strCategory }
        </div>
      ))}
    </>
  );
}
