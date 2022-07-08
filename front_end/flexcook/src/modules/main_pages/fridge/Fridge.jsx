import FridgeItem from "./FridgeItem";
import { useEffect, useState } from "react";
import { useGetIngredientsFromUserQuery } from "../../../data/ingredientapi";
import FridgeFooter from "./FridgeFooter";
import FridgeMenu from "./FridgeMenu";

const Fridge = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const {
    data: ingredientData,
    isLoading,
    isError,
    isSuccess,
  } = useGetIngredientsFromUserQuery(4);
  console.log(ingredientData);

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
              {ingredientData.map(({ id, igtInv: { igtName }, invCnt }) => (
                <FridgeItem key={id} id={id} name={igtName} count={invCnt} />
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
