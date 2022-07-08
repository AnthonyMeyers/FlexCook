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
      <Select
        styles={customStylesSelect}
        className="fridgemenu__select"
        onChange={(choice) => setRemoveItem(choice.value)}
        options={ingredientData.map(({ id, igtInv: { igtName } }) => ({
          value: id,
          label: igtName,
        }))}
      ></Select>
      <button onClick={handleRemoveitemClick}>remove item</button>
    </>
  );
};

export default MenuRemoveItem;
