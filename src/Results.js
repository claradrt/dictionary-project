import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  console.log(props.results);
  let definition = props.results.meanings[0].definitions[0].definition;
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
