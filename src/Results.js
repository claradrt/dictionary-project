import React from "react";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  console.log(props.results);
  return (
    <div className="Results">
      <h2 className="text-capitalize">{props.results.word}</h2>
      {props.results.phonetics.map((phonetic, index) => {
        return (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        );
      })}
      {props.results.meanings.map((meaning, index) => {
        return (
          <div key={index}>
            <Meaning meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
