import React from "react";
import { testobject } from "../../data/data";
import FridgeItem from "./FridgeItem";
import { useGetAllIngredientsQuery } from "../../data/ingredientapi";

const Fridge = () => {
  const { data } = useGetAllIngredientsQuery();
  console.log(data);
  return (
    <section className="fridge">
      <h3 className="fridge__toptitle">Available items</h3>
      {testobject && testobject.length > 0 && (
        <div className="container">
          <ul className="fridge__list">
            {testobject &&
              testobject.map(({ id, name }) => (
                <FridgeItem key={id} name={name} />
              ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Fridge;
