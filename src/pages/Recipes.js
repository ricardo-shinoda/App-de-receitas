import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../Context/MyContext';

export default function Recipes() {
  const { apiObj } = useContext(MyContext);

  // useEffect(() => {
  //   const apiRender = () => {
  //     if (apiObj !== undefined && apiObj.length > 1) {
  //       const mapApi = apiObj.map((food) => (
  //         <div key={ food.idMeal }>
  //           <p>{ food.strMeal }</p>
  //         </div>
  //       ));
  //       return mapApi;
  //     }
  //     return <div> </div>;
  //   };
  //   apiRender();
  // }, [apiObj]);

  return (
    <div>
      <Header />
      { apiObj !== undefined && apiObj.length > 0
      && (
        apiObj.map((food) => (
          <div key={ food.idMeal }>
            <p>{ food.strMeal }</p>
          </div>
        ))
      )}
    </div>
  );
}
