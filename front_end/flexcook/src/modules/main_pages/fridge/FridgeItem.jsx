import { useUpdateInventoryCountMutation } from "../../../data/ingredientapi";
import { useState } from "react";
const FridgeItem = ({ name, id, count, useMessaging }) => {
  const [executing, setExecuting] = useState(false);
  //API mutation to change item counts
  const [changeCountItem] = useUpdateInventoryCountMutation();

  //Function to add to count
  function handleAddtocountClick() {
    setExecuting(true);
    const status = changeCountItem({ invId: id, invCount: count + 1 });
    status.then((resolve) => {
      if ("error" in resolve) {
        useMessaging("This action is not possible at the moment.");
      }
      setTimeout(() => {
        setExecuting(false);
      }, 600);
    });
  }

  return (
    <li
      className={executing ? "fridgeitem disabled" : "fridgeitem"}
      onClick={handleAddtocountClick}
    >
      <div className="fridgeitem__texture"></div>
      <h3 className="fridgeitem__title">{name.substr(0, 8)}</h3>
      <span className="fridgeitem__counter">{count}</span>
    </li>
  );
};

export default FridgeItem;
