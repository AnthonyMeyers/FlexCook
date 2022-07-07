import { Route, Routes } from "react-router-dom";
import Fridge from "./main_pages/fridge/Fridge";
import NotFound from "./main_pages/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/fridge" element={<Fridge />} />
      <Route exact path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default Routing;
