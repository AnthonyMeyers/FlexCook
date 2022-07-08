import { useUpdateInventoryCountMutation } from "../../../data/ingredientapi";
import { useState, useEffect } from "react";

const FridgeItem = ({ name, id, count }) => {
  const [changeCountItem] = useUpdateInventoryCountMutation();

  const [error, setError] = useState(null);

  function handleAddtocountClick() {
    const status = changeCountItem({ invId: id, invCount: count + 1 });
  }

  return (
    <li className="fridgeitem" onClick={handleAddtocountClick}>
      <div className="fridgeitem__texture"></div>
      <h3 className="fridgeitem__title">{name.substr(0, 8)}</h3>
      <span className="fridgeitem__counter">{count}</span>
    </li>
  );
};

export default FridgeItem;
