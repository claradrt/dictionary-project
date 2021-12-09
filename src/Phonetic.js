import React from "react";
import "./Phonetic.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle as farPlayCircle } from "@fortawesome/free-regular-svg-icons";

export default function Phonetic(props) {
  function handleAudioClick(event) {
    event.preventDefault();
    const audio = new Audio(props.phonetic.audio);
    audio.play();
  }

  return (
    <span className="Phonetics">
      {props.phonetic.audio && (
        <a href="#" onClick={handleAudioClick}>
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
