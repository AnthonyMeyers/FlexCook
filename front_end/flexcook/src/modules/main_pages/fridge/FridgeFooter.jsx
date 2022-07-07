import Select from "react-select";
import { useState, useEffect } from "react";

const Footer = ({ useActiveMenu, activeMenu }) => {
  return (
    <>
      <footer className="footer">
        <div className="footer__align">
          <h2 className="footer__align__title">Add item</h2>
          <button
            className="footer__align__button"
            onClick={() => useActiveMenu(!activeMenu)}
          >
            <span className="footer__align__button__text">add item</span>
          </button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
