import { customStylesSelect } from "../../../helpers/reactselect";
import Select from "react-select";
import { useState } from "react";
import {
  useGetIngredientsFromUserQuery,
  useRemoveInventoryItemMutation,
} from "../../../data/ingredientapi";

const MenuRemoveItem = () => {
  const [removeItem, setRemoveItem] = useState(null);
  const [removeItemFromInventory] = useRemoveInventoryItemMutation();

  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetIngredientsFromUserQuery(4);

  function handleRemoveitemClick() {
    if (removeItem != null) {
      removeItemFromInventory({ invId: removeItem });
    }
  }

  return (
    <>
      <div className="fridgemenu__block">
        {ingredientData && ingredientData.length > 0 && (
          <Select
            styles={customStylesSelect}
            className="fridgemenu__block__select fridgemenu__item"
            onChange={(choice) => setRemoveItem(choice.value)}
            options={ingredientData.map(({ id, igtInv: { igtName } }) => ({
              value: id,
              label: igtName,
            }))}
          ></Select>
        )}
        <button
          className="fridgemenu__block__button fridgemenu__item"
          onClick={handleRemoveitemClick}
        >
          remove item
        </button>
      </div>
    </>
  );
};

export default MenuRemoveItem;
