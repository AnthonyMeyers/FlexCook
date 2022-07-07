import logo from "./logo.svg";
import Header from "./modules/main_components/Header";
import Routing from "./modules/Routing";

function App() {
  return (
    <>
      <div className="fullpage">
        <Header />

        <Routing />
      </div>
    </>
  );
}

export default App;
