import React from "react";
import { useForm } from "react-hook-form";
// import api from "../../service/api";

import "./New.css";

function New() {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // await api.post("posts", data);
    console.log(data);
  };

  return (
    <form
      className="new-post"
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
    >
      <input type="file" ref={register} name="image" />
      <input
        type="text"
        placeholder="Author post"
        name="author"
        ref={register({ required: true })}
      />
      {errors.author && <p className="error">Author is required</p>}
      <input
        type="text"
        placeholder="Post Location"
        name="place"
        ref={register({ required: true })}
      />
      {errors.place && <p className="error">Place is required</p>}
      <input
        type="text"
        placeholder="Description"
        name="description"
        ref={register({ required: true })}
      />
      {errors.description && <p className="error">Description is required</p>}
      <input
        type="text"
        placeholder="Hashtags"
        name="hashtags"
        ref={register({ required: true })}
      />
      {errors.hashtags && <p className="error">Hashtags is required</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default New;
