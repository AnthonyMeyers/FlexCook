import { useState } from "react";
import logo from "./logo.svg";
import Header from "./modules/main_components/Header";
import Footer from "./modules/main_components/Footer";
import Routing from "./modules/Routing";

function App() {
  return (
    <>
      <div className="fullpage">
        <Header />

        <Routing />

        <Footer />
      </div>
    </>
  );
}

export default App;
