import React from "react";
import "./Feed.css";

import avatar from "../../assets/img/static.jpg";
import more from "../../assets/more.svg";
import like from "../../assets/like.svg";
import comment from "../../assets/comment.svg";
import send from "../../assets/send.svg";

import Stories from "../../components/Stories/Stories";
import postImage from "../../assets/img/post.jpg";

function Feed() {
  return (
    <>
      <Stories />
      <section className="post-list">
        <article>
          <header>
            <div className="user">
              <img src={avatar} alt="avatar" title="avatar" />
              <div className="user-infor">
                <span>Linh</span>
                <span className="place">HCM City</span>
              </div>
            </div>
            <img src={more} alt="More" />
          </header>

          <img src={postImage} alt="post-image" title="post-image" />

          <footer>
            <div className="actions">
              <button type="button">
                <img src={like} />
              </button>
              <img src={comment} alt="comment" alt="comement" />
              <img src={send} alt="share" alt="share" />
            </div>
            <strong>100 Likes</strong>
            <p>
              This is description<span> waiting for love</span>
            </p>
          </footer>
        </article>
      </section>
    </>
  );
}

export default Feed;
