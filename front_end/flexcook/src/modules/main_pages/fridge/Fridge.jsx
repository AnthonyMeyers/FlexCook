import FridgeItem from "./FridgeItem";
import { useEffect, useState } from "react";
import { useGetAllIngredientsQuery } from "../../../data/ingredientapi";
import FridgeFooter from "./FridgeFooter";
import FridgeMenu from "./FridgeMenu";

const Fridge = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetAllIngredientsQuery();

  return (
    <>
      <FridgeMenu className={activeMenu ? "fridgemenu open" : "fridgemenu"} />
      <h3 className="fridge__toptitle">Available items</h3>
      <section
        className={activeMenu ? "fridge fridge-right" : "fridge fridge-left"}
      >
        {ingredientData && ingredientData.length > 0 && (
          <div className="container">
            <ul className="fridge__list">
              {ingredientData.map(({ id, igtName }) => (
                <FridgeItem key={id} name={igtName} />
              ))}
            </ul>
          </div>
        )}
      </section>
      <FridgeFooter useActiveMenu={setActiveMenu} activeMenu={activeMenu} />
    </>
  );
};

export default Fridge;
