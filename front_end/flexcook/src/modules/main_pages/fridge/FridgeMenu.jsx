import { useState } from "react";
import MenuAddItem from "./MenuAddItem";
import MenuRemoveItem from "./MenuRemoveItem";
const FridgeMenu = ({ className }) => {
  const [showAddMenu, setShowAddMenu] = useState(false);
  const [showRemoveMenu, setShowRemoveMenu] = useState(false);

  return (
    <aside className={className}>
      <h2 className="fridgemenu__title">Inventory options</h2>
      <button onClick={() => setShowAddMenu(!showAddMenu)}>
        Add items to list
      </button>
      {showAddMenu && <MenuAddItem />}
      <button onClick={() => setShowRemoveMenu(!showRemoveMenu)}>
        Remove item from list
      </button>
      {showRemoveMenu && <MenuRemoveItem />}
    </aside>
  );
};

export default FridgeMenu;
