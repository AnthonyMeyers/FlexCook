import React from "react";
import { testobject } from "../../data/data";

const Fridge = () => {
  return (
    <section className="fridge">
      <h3 className="fridge__toptitle">Available items</h3>
      {testobject && testobject.length > 0 && (
        <ul className="fridge__list">
          {testobject &&
            testobject.map(({ id, name }) => (
              <li key={id} className="fridge__list__item">
                {name}
              </li>
            ))}
        </ul>
      )}
    </section>
  );
};

export default Fridge;
