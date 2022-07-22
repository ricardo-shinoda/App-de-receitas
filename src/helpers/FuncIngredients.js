import React from 'react';

const FuncIngredients = (ingredient) => (
  ingredient && ingredient.map((ingred, index) => (
    <label
      data-testid={ `${index}-ingredient-step` }
      htmlFor={ `checkIngredient${index}` }
      key={ index }
    >
      <input
        type="checkbox"
        name="checkbox"
        id={ `checkIngredient${index}` }
      />
      {ingred[1]}
    </label>
  ))
);

export default FuncIngredients;
