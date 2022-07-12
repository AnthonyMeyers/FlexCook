import { useUpdateInventoryCountMutation } from "../../../data/ingredientapi";
import { useState } from "react";
const FridgeItem = ({ name, id, count, useMessaging }) => {
  const [executing, setExecuting] = useState(false);
  //API mutation to change item counts
  const [changeCountItem] = useUpdateInventoryCountMutation();

  function handleCountClick(e) {
    setExecuting(true);
    let status = null;
    //If clicked on the remove button
    if (e.nativeEvent.target.id === "remove-item" && count > 0) {
      status = changeCountItem({ invId: id, invCount: count - 1 });
    }
    //If did not click on remove button
    if (e.nativeEvent.target.id !== "remove-item") {
      status = changeCountItem({ invId: id, invCount: count + 1 });
    }

    //See if there is an error in the status
    if (status) {
      status.then((resolve) => {
        if ("error" in resolve) {
          useMessaging("This action is not possible at the moment.");
        }
        setTimeout(() => {
          setExecuting(false);
        }, 600);
      });
    }
    if (!status) {
      setExecuting(false);
    }
  }

  return (
    <li
      className={executing ? "fridgeitem disabled" : "fridgeitem"}
      onClick={handleCountClick}
    >
      <div className="fridgeitem__texture"></div>
      <h3 className="fridgeitem__title">{name.substr(0, 8)}</h3>
      <span className="fridgeitem__counter">{count}</span>
      <button
        id="remove-item"
        className="fridgeitem__button"
        onClick={handleCountClick}
      >
        <span className="fridgeitem__button__text">minus</span>
      </button>
    </li>
  );
};

export default FridgeItem;
