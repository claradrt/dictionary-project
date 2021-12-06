import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log("Received by Photos component:", props.photos);

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
}
