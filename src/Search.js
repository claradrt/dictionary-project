import React, { useState } from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  function search(event) {
    event.preventDefault();
    alert(searchValue);
  }

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <form className="Search text-center" onSubmit={search}>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Enter a word..."
          onChange={handleSearchValueChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
}
