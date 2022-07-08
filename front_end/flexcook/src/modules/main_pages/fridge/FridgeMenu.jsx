import Async, { useAsync } from "react-select/async";
import Select from "react-select";
import {
  useGetAllIngredientsQuery,
  useAddToInventoryMutation,
} from "../../../data/ingredientapi";
import { customStylesSelect } from "../../../helpers/reactselect";
import { useState, useEffect } from "react";

const FridgeMenu = ({ className }) => {
  const [newItem, setNewItem] = useState(null);
  const [AddToInventory] = useAddToInventoryMutation();

  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllIngredientsQuery();

  function handleAdditemButton() {
    if (newItem != null) {
      AddToInventory({ userId: 4, ingredId: newItem });
    }
  }

  return (
    <aside className={className}>
      <h2 className="fridgemenu__title">Add an item</h2>
      {ingredientData && ingredientData.length > 0 && (
        <Select
          styles={customStylesSelect}
          className="fridgemenu__select"
          onChange={(choice) => setNewItem(choice.value)}
          options={ingredientData.map(({ id, igtName }) => ({
            value: id,
            label: igtName,
          }))}
        ></Select>
      )}
      <button onClick={handleAdditemButton}>Add item</button>
    </aside>
  );
};

export default FridgeMenu;
