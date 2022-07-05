import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style/App.scss";
import ProviderCollection from "./modules/provider/ProviderCollection";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderCollection>
    <App />
  </ProviderCollection>
);
