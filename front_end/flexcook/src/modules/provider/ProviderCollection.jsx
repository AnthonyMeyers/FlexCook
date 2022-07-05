import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const ProviderCollection = ({ children }) => {
  return (
    <>
      <ChakraProvider>
        <Router>{children}</Router>
      </ChakraProvider>
    </>
  );
};

export default ProviderCollection;
