import { useUpdateInventoryCountMutation } from "../../../data/ingredientapi";
import { useState } from "react";

const FridgeItem = ({ name, id, count, useMessaging, draggable }) => {
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
  function drag(e) {
    if (e.target.id === "test" + id) {
      e.dataTransfer.setData("text", e.target.id);
    }
  }

  return (
    <li
      className={executing ? "fridgeitem disabled" : "fridgeitem"}
      onClick={handleCountClick}
      draggable={draggable}
      id={"test" + id}
      onDragStart={drag}
    >
      <div className="fridgeitem__texture" draggable="false"></div>
      <h3 className="fridgeitem__title" draggable="false">
        {name.substr(0, 8)}
      </h3>
      <span className="fridgeitem__counter" draggable="false">
        {count}
      </span>
      <button
        draggable="false"
        id="remove-item"
        className="fridgeitem__button"
        onClick={handleCountClick}
      >
        <span className="fridgeitem__button__text" draggable="false">
          minus
        </span>
      </button>
    </li>
  );
};

export default FridgeItem;
