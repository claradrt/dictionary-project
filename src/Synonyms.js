import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  console.log("Synonyms:", props.synonyms);
  if (props.synonyms.length > 0) {
    return (
      <ul className="SynonymList list-group list-group-horizontal-sm">
        {props.synonyms.map((synonym, index) => {
          return (
            <li key={index} className="synonyms list-group-item">
              {synonym}{" "}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
