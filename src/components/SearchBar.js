import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function SearchBar() {
  const { clickSearch, handleClickRadio, handleChangeSearch } = useContext(MyContext);
  return (
    <div>
      <input type="text" data-testid="search-input" onChange={ handleChangeSearch } />
      <br />
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          data-testid="ingredient-search-radio"
          id="ingredient"
          onChange={ handleClickRadio }
          name="radio"
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          type="radio"
          data-testid="name-search-radio"
          id="name"
          onChange={ handleClickRadio }
          name="radio"
        />
      </label>
      First Letter
      <label htmlFor="first-letter">
        <input
          type="radio"
          data-testid="first-letter-search-radio"
          id="first-letter"
          onChange={ handleClickRadio }
          name="radio"
        />
      </label>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ clickSearch }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
