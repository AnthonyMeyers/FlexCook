import Select from "react-select";
import { useState, useEffect } from "react";

const Footer = ({ useActiveMenu, activeMenu }) => {
  const [disableButton, setDisableButton] = useState(false);

  function handleActivatemenuClick() {
    useActiveMenu(!activeMenu);
    setDisableButton(true);
    setTimeout(() => {
      setDisableButton(false);
    }, 2000);
  }

  return (
    <>
      <footer className="footer">
        <div className="footer__align">
          <h2 className="footer__align__title">Add item</h2>
          <button
            disabled={disableButton}
            className="footer__align__button"
            onClick={handleActivatemenuClick}
          >
            <span className="footer__align__button__text">add item</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
