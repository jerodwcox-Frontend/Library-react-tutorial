import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";

const Nav = ({ numberOfItems }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon="bars" />
          </button>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="menu__list">
              <a href="/books" className="menu__link" onClick={closeMenu}>
                Books
              </a>
            </li>
            <li className="menu__list">
              <a href="/cart" className="menu__link" onClick={closeMenu}>
                Cart {numberOfItems > 0 && (
                  <span className="cart__length">{numberOfItems}</span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
