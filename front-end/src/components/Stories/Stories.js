import React from "react";
import "./Stories.css";

import avatar from "../../assets/img/static.jpg";

function Stories() {
  return (
    <section className="stories">
      <figure>
        <picture className="post">
          <img src={avatar} title="image-story" alt="image-story" />
        </picture>
      </figure>
    </section>
  );
}

export default Stories;
