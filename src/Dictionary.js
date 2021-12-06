import React, { useState } from "react";
import Search from "./Search";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");

  function getSearchResults(searchResults) {
    setResults(searchResults);
  }

  function getPicResults(photoResults) {
    setPhotos(photoResults);
  }

  return (
    <div className="Dictionary">
      <Search onSearch={getSearchResults} getPics={getPicResults} />
      {results && <Results results={results} />}
      {photos && <Photos photos={photos} />}
    </div>
  );
}
