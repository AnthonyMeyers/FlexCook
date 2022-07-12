import { useState } from "react";
import MenuAddItem from "./MenuAddItem";
import MenuRemoveItem from "./MenuRemoveItem";
const FridgeMenu = ({ className }) => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showRemoveMenu, setShowRemoveMenu] = useState(false);

  return (
    <aside className={className}>
      <h2 className="fridgemenu__title fridgemenu__item">Inventory options</h2>
      <button
        className="fridgemenu__button fridgemenu__item"
        onClick={() => setShowAddMenu(!showAddMenu)}
      >
        Add items to list
      </button>
      {showAddMenu && <MenuAddItem />}
      <button
        className="fridgemenu__button fridgemenu__item"
        onClick={() => setShowRemoveMenu(!showRemoveMenu)}
      >
        Remove item from list
      </button>
      {showRemoveMenu && <MenuRemoveItem />}
    </aside>
  );
};

export default FridgeMenu;
