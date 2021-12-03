import React, { useState } from "react";
import Search from "./Search";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary() {
  const [results, setResults] = useState("");

  function getSearchResults(searchResults) {
    setResults(searchResults);
  }
  return (
    <div className="Dictionary">
      <Search onSearch={getSearchResults} />
      {results && <Results results={results} />}
    </div>
  );
}
