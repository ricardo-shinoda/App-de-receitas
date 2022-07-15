import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';

export default function Header(props) {
  const { titulo } = props;

  const [isDisabledSearch, setSearch] = useState(false);

  useEffect(() => {
    if (titulo === 'Profile' || titulo === 'Done recipes'
            || titulo === 'Favorite Recipes') setSearch(true);
  }, [titulo]);

  return (
    <>
      <h1>{titulo}</h1>
      <img
        src={ ProfileIcon }
        alt="profileIcon"
        data-testid="profile-top-btn"
      />
      <img
        src={ SearchIcon }
        alt="searchIcon"
        data-testid="search-top-btn"
        style={
          isDisabledSearch ? { display: 'none' } : {}
        }
      />
    </>
  );
}

Header.propTypes = {
  titulo: PropTypes.string,
}.isRequired;
