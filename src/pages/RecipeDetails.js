// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// function RecipeDetails() {
//   const history = useHistory();
//   // const [foodApi, setFoodApi] = useState();
//   // const [drinkApi, setDrinkApi] = useState();
//   // const id = useParams();;

//   useEffect(() => {
//     if (history.location.pathname === '/foods') {
//       const getApiFood = async (id) => {
//         const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
//         const responseFoodDetails = await response.json();
//         setFoodApi(responseFoodDetails);
//       };
//       getApiFood();
//     }
//     if (history.location.pathname === '/drinks') {
//       const getApiDrink = async (id) => {
//         const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
//         const responseDrinkDetails = await response.json();
//         setDrinkApi(responseDrinkDetails);
//       };
//       getApiDrink();
//     }
//   }, [history.location.pathname]);

//   return (
//     <div>
//       <img src="" alt="algum" data-testid="recipe-photo" />
//       <h1 data-testid="recipe-title"> </h1>
//       <p data-testid="recipe-category"> </p>
//       <ul>
//         <li data-testid={ `${index}-ingredient-name-and-measure` } />
//       </ul>
//       <p data-testid="instructions" />
//       {history.location.pathname === '/foods' && (
//         <iframe
//           data-testid="video"
//           width="420"
//           height="315"
//           src=""
//           title="Vídeo de receita"
//         />
//       )}
//       <div data-testid={ `${index}-recomendation-card` }> </div>
//     </div>
//   );
// }

// export default RecipeDetails;
