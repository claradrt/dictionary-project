import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  function handleSynonymClick(synonym) {
    props.onSynonymSelect(synonym);
  }

  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms-wrapper mt-2 mb-3">
        <p>Synonyms:</p>
        <ul className="SynonymList list-group list-group-horizontal">
          {props.synonyms.map((synonym, index) => {
            return (
              <li
                key={index}
                className="synonyms list-group-item"
                onClick={() => {
                  handleSynonymClick(synonym);
                }}
              >
                {synonym}{" "}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
