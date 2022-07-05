import { BrowserRouter as Router } from "react-router-dom";

const ProviderCollection = ({ children }) => {
  return (
    <>
      <Router>{children}</Router>
    </>
  );
};

export default ProviderCollection;
