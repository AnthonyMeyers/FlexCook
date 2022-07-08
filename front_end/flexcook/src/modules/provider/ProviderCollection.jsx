import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import store from "../../data/store";

let persistor = persistStore(store);

const ProviderCollection = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ChakraProvider>
            <Router>{children}</Router>
          </ChakraProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default ProviderCollection;
