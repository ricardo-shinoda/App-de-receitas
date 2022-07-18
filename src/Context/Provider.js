import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [apiRadio, setApiRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [apiObj, setApiObj] = useState('');

  const handleChangeSearch = ({ target }) => {
    setSearchValue(target.value);
  };

  const handleClickRadio = async ({ target }) => {
    if (target.id === 'ingredient') {
      const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=';
      setApiRadio(url);
    } else if (target.id === 'name') {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
      setApiRadio(url);
    } else if (target.id === 'first-letter') {
      const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
      setApiRadio(url);
    }
  };

  const clickSearch = async () => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
    const apiUrl = apiRadio + searchValue;
    if (apiRadio === url && searchValue.length !== 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setApiObj(data.meals);
    }
  };

  const initialState = {
    clickSearch,
    handleClickRadio,
    handleChangeSearch,
    apiRadio,
    apiObj,
  };

  return (
    <div>
      <MyContext.Provider value={ initialState }>
        { children }
      </MyContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf,
}.isRequired;

export default Provider;
