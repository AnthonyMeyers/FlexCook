import Select from "react-select";
import {
  useGetAllIngredientsQuery,
  useAddToInventoryMutation,
} from "../../../data/ingredientapi";
import { customStylesSelect } from "../../../helpers/reactselect";
import { useState } from "react";

const MenuAddItem = () => {
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
    <>
      <div className="fridgemenu__block">
        {ingredientData && ingredientData.length > 0 && (
          <Select
            styles={customStylesSelect}
            className="fridgemenu__block__select fridgemenu__item"
            onChange={(choice) => setNewItem(choice.value)}
            options={ingredientData.map(({ id, igtName }) => ({
              value: id,
              label: igtName,
            }))}
          ></Select>
        )}
        <button
          className="fridgemenu__block__button fridgemenu__item"
          onClick={handleAdditemButton}
        >
          Add item
        </button>
      </div>
    </>
  );
};

export default MenuAddItem;
