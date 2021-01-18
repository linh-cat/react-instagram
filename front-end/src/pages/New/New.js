import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import api from "../../service/api";

import "./New.css";

function New() {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      image,
      author,
      place,
      description,
      hashtags,
    };

    console.log(data);

    await api.post("posts", data);
  };

  return (
    <form
      className="new-post"
      onSubmit={handleSubmit}
      method="post"
      enctype="multipart/form-data"
    >
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <input
        type="text"
        placeholder="Author post"
        name="author"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Post Location"
        name="place"
        onChange={(e) => setPlace(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Hashtags"
        name="hashtags"
        onChange={(e) => setHashtags(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default New;
