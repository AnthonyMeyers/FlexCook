import Async, { useAsync } from "react-select/async";
import Select from "react-select";
import { useGetAllIngredientsQuery } from "../../../data/ingredientapi";
import { customStylesSelect } from "../../../helpers/reactselect";

const FridgeMenu = ({ className }) => {
  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllIngredientsQuery();

  return (
    <sidebar className={className}>
      <h2 className="fridgemenu__title">Add an item</h2>
      {ingredientData && ingredientData.length > 0 && (
        <Select
          styles={customStylesSelect}
          className="fridgemenu__select"
          options={ingredientData.map(({ id, igtName }) => ({
            value: id,
            label: igtName,
          }))}
        ></Select>
      )}
    </sidebar>
  );
};

export default FridgeMenu;
