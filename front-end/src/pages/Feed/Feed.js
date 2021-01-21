import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Feed.css";
// import io from "socket.io-client";
import api from "../../service/api";

import avatar from "../../assets/img/static.jpg";
import more from "../../assets/more.svg";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";

import Stories from "../../components/Stories/Stories";

function Feed() {
  let history = useHistory();

  const [feed, setFeed] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // registerSocket();

    async function fetchData() {
      const response = await api.get("posts");

      setFeed(response.data);
    }

    fetchData();
  }, []);

  // const registerSocket = () => {
  //   const socket = io("http://localhost:3001");

  //   socket.on("post", (newPost) => {
  //     setFeed(newPost);
  //   });
  // };

  const handleLike = (id) => {
    api.post(`/posts/${id}/like`);
    alert(`Like post with id: ${id}`);
  };

  const handleClickDelete = (id) => {
    api.post(`/posts/${id}/delete`);
    window.location.reload();
  };

  const handleClickEdit = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <>
      <Stories />
      <section className="post-list">
        {feed.map((post) => (
          <article key={post._id}>
            <header>
              <div className="user">
                <img src={avatar} alt="avatar" title="avatar" />
                <div className="user-infor">
                  <span>{post.author}</span>
                  <span className="place">{post.place}</span>
                </div>
              </div>

              <img
                src={more}
                alt="More"
                onClick={() => {
                  setOpen(!open);
                }}
              />
            </header>
            <div className={open ? "open pop-up" : "pop-up hide"}>
              <p className="edit" onClick={() => handleClickEdit(post._id)}>
                Edit
              </p>
              <p className="delete" onClick={() => handleClickDelete(post._id)}>
                Delete
              </p>
            </div>
            <img
              src={`http://localhost:3001/files/${post.image}`}
              alt={post.description}
              title={post.description}
            />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => handleLike(post._id)}>
                  <img src={like} alt="like" title="like" />
                </button>
                <img src={comment} alt="comment" title="comment" />
                <img src={send} alt="share" title="share" />
              </div>
              <strong>100 Likes</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}

export default Feed;
