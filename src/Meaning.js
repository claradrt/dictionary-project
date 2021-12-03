import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
            </p>
            <em>Example: {definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
