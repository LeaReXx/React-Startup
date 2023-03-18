import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header() {
  return (
    <header className="container px-3 py-4 flex justify-between items-center">
      <div>
        <img src="./img/knor-logo.svg" alt="" />
      </div>
      <div className="text-3xl d">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
    </header>
  );
}
