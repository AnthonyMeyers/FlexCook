import { useState, useEffect } from "react";
import FridgeItem from "./FridgeItem";
import { useGetAllIngredientsQuery } from "../../data/ingredientapi";

const Fridge = () => {
  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllIngredientsQuery();

  return (
    <section className="fridge">
      <h3 className="fridge__toptitle">Available items</h3>
      {ingredientData && ingredientData.length > 0 && (
        <div className="container">
          <ul className="fridge__list">
            {ingredientData.map(({ id, igtName }) => (
              <FridgeItem key={id} name={igtName} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Fridge;
