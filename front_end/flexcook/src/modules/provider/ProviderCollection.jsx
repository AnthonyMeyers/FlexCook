import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../../data/store";

const ProviderCollection = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Router>{children}</Router>
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default ProviderCollection;
