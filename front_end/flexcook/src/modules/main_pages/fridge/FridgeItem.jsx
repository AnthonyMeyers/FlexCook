import { useUpdateInventoryCountMutation } from "../../../data/ingredientapi";

const FridgeItem = ({ name, id, count, useMessaging }) => {
  //API mutation to change item counts
  const [changeCountItem] = useUpdateInventoryCountMutation();

  //Function to add to count
  function handleAddtocountClick() {
    const status = changeCountItem({ invId: id, invCount: count + 1 });
    status.then((resolve) => {
      if ("error" in resolve) {
        useMessaging("This action is not possible at the moment.");
      }
    });
  }

  return (
    <li className="fridgeitem" onClick={handleAddtocountClick}>
      <div className="fridgeitem__texture"></div>
      <h3 className="fridgeitem__title">{name.substr(0, 8)}</h3>
      <span className="fridgeitem__counter">{count}</span>
    </li>
  );
};

export default FridgeItem;
