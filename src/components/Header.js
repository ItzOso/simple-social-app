import { SearchRounded } from "@material-ui/icons";
import React from "react";
import "./Header.scss";

function Header({searchTerm, setSearchTerm}) {

  return (
    <div className="header">
      <h1>SOCIAL</h1>
      <div className="header-search">
        <SearchRounded />
        <input value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}} type="text" placeholder="Search.." />
      </div>
    </div>
  );
}

export default Header;
