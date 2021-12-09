import React, { useState } from "react";
import Search from "./Search";
import "./Dictionary.css";
import Results from "./Results.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState("");
  const [keyword, setKeyword] = useState("");

  function onSynonymSelect(synonym) {
    setKeyword(synonym);
  }

  function getSearchResults(searchResults) {
    setResults(searchResults);
    setKeyword("");
  }

  function getPicResults(photoResults) {
    setPhotos(photoResults);
  }

  return (
    <div className="Dictionary">
      <Search
        onSearch={getSearchResults}
        getPics={getPicResults}
        keyword={keyword}
      />
      {results && (
        <Results results={results} onSynonymSelect={onSynonymSelect} />
      )}
      {photos && <Photos photos={photos} />}
    </div>
  );
}
