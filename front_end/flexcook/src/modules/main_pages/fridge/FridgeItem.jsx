import React from "react";

const FridgeItem = ({ name }) => {
  return (
    <li className="fridgeitem">
      <div className="fridgeitem__texture"></div>
      <h3 className="fridgeitem__title">{name}</h3>
      <input className="fridgeitem__checkbox" type="checkbox" />
    </li>
  );
};

export default FridgeItem;
