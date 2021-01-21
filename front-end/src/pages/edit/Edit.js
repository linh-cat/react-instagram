import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Edit.css";
import { Link } from "react-router-dom";

import api from "../../service/api";

function Edit() {
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [hashtags, setHashtags] = useState("");

  let { id } = useParams();

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const dataEdit = new FormData();

    // dataEdit.append("image", image);
    dataEdit.append("author", author);
    dataEdit.append("place", place);
    dataEdit.append("description", description);
    dataEdit.append("hashtags", hashtags);

    await api.post(`/posts/${id}/update`, dataEdit);
  };

  return (
    <form className="new-post" onSubmit={handleSubmitEdit}>
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

export default Edit;
