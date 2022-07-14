import React from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  const initialState = {};

  return (
    <div>
      <MyContext.Provider value={ initialState }>
        { children }
      </MyContext.Provider>
    </div>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default Provider;
