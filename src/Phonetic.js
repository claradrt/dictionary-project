import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle as farPlayCircle } from "@fortawesome/free-regular-svg-icons";

export default function Phonetic(props) {
  return (
    <span className="Phonetics">
      {props.phonetic.audio && (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          <span className="icon" id="full-play-icon">
            <FontAwesomeIcon icon={faPlayCircle} />
          </span>
          <span className="icon" id="empty-play-icon">
            <FontAwesomeIcon icon={farPlayCircle} />
          </span>
        </a>
      )}
      {props.phonetic.text}
    </span>
  );
}
