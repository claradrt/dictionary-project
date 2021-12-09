import React from "react";
import Synonyms from "./Synonyms.js";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3 className="text-capitalize mt-4">{props.meaning.partOfSpeech}</h3>
      <ol>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              <li className="mb-4">
                {definition.definition} <br />
                <em className="example"> {definition.example}</em>
                <Synonyms
                  synonyms={definition.synonyms}
                  onSynonymSelect={props.onSynonymSelect}
                />
              </li>
            </div>
          );
        })}
      </ol>
    </section>
  );
}
