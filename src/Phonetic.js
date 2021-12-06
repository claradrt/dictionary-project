import React from "react";

export default function Phonetic(props) {
  console.log("Phonetics", props.phonetic);
  return (
    <div className="Phonetics">
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      )}
      <br />
      {props.phonetic.text}
    </div>
  );
}
