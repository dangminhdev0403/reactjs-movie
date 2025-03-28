import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Header = () => {
  // =====================HOOKS==================

  // =====================FUNCTIONS==============

  // =====================JSX====================
  return (
    <header className="flex h-14 items-center justify-between bg-slate-950 px-4 text-white">
      <div className="flex items-center gap-4">
        <img src="./netflix.png" alt="" className="w-16 sm:w-24" />
        <button className="cursor-pointer">Phim</button>
        <button href="#" className="cursor-pointer">
          Truyền hình
        </button>
      </div>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
