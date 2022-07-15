import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header(props) {
  const { titulo } = props;

  const [isDisabledSearch, setSearch] = useState(false);
  const [inputDisable, setInput] = useState(false);

  useEffect(() => {
    if (titulo === 'Profile' || titulo === 'Done Recipes'
            || titulo === 'Favorite Recipes') setSearch(true);
  }, [titulo]);

  const inputDisabled = () => (inputDisable ? setInput(false) : setInput(true));

  // const buttonSearch = (
  //   <button type="button" onClick={ inputDisabled() }>
  //     <img
  //       src={ SearchIcon }
  //       // onKeyPress={ inputDisable()}
  //       id="searchIcon"
  //       alt="searchIcon"
  //       data-testid="search-top-btn"
  //     />
  //   </button>
  // );

  return (
    <>
      <h1 data-testid="page-title">{titulo}</h1>
      <Link to="/profile">
        <img
          src={ ProfileIcon }
          alt="profileIcon"
          data-testid="profile-top-btn"
        />
      </Link>
      { !isDisabledSearch
    && (
      <button type="button" onClick={ () => inputDisabled() }>
        <img
          src={ SearchIcon }
          id="searchIcon"
          alt="searchIcon"
          data-testid="search-top-btn"
        />
      </button>) }
      { inputDisable ? <input data-testid="search-input" /> : '' }
    </>
  );
}

Header.propTypes = {
  titulo: PropTypes.string,
}.isRequired;
