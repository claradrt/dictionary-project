import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  console.log(props.results);
  return (
    <div>
      <h2 className="text-capitalize">{props.results.word}</h2>
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
