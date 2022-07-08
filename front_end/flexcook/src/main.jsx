import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/App.scss";
import ProviderCollection from "./modules/provider/ProviderCollection";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderCollection>
    <App />
  </ProviderCollection>
);
