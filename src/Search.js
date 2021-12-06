import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search(props) {
  const [searchValue, setSearchValue] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    props.onSearch(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <section>
      <form className="Search text-center" onSubmit={search}>
        <h1 className="text-center mb-3">What word do you want to look up?</h1>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for a word..."
            onChange={handleSearchValueChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} color="#31112C" />
          </button>
        </div>
      </form>
    </section>
  );
}
