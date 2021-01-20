import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../../service/api";

import "./New.css";

function New() {
  let history = useHistory();

  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("image", image);
    data.append("author", author);
    data.append("place", place);
    data.append("description", description);
    data.append("hashtags", hashtags);

    await api.post("posts", data);

    history.push("/");
  };

  return (
    <form className="new-post" onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        type="text"
        placeholder="Author post"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Post Location"
        onChange={(e) => setPlace(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Hashtags"
        onChange={(e) => setHashtags(e.target.value)}
      />

      <button type="submit">Submit</button>
      <Link to="/">
        <button type="button" style={{ width: "389pt" }}>
          Cancel
        </button>
      </Link>
    </form>
  );
}

export default New;
