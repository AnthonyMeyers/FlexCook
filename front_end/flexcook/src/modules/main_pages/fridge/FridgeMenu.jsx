import { useState } from "react";
import MenuAddItem from "./MenuAddItem";
const FridgeMenu = ({ className }) => {
  const [showAddMenu, setShowAddMenu] = useState(false);

  return (
    <aside className={className}>
      <h2
        className="fridgemenu__title"
        onClick={() => setShowAddMenu(!showAddMenu)}
      >
        Inventory options
      </h2>
      {showAddMenu && <MenuAddItem />}
    </aside>
  );
};

export default FridgeMenu;
