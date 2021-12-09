import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos.length !== 0) {
    return (
      <section className="Photos">
        <div className="row g-0">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-md-4 photo-column" key={index}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt="illustration"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
