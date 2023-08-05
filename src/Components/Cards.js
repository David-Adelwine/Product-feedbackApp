import React, { useState } from "react";
import { Link } from "react-router-dom";
import arrowUp from "../assets/shared/icon-arrow-up.svg";
import CommentsImg from "../assets/shared/icon-comments.svg";
import "../Styles/Card.css";

const Card = (props) => {
  
  const { id, title, description, category, upvotes, comments } = props;

  const [upvote, setUpvote] = useState(upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setUpvote(upvote + 1);
    } else {
      setUpvote(upvote - 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className="Card--elements">
      <Link to={`/Feedbackedit/${id}`} style={{ textDecoration: "none" }}>
        <section className="inner--card">
          <h3 className="card--header">{title}</h3>
          <p className="card--description">{description}</p>
          <span className="faintbg--header">{category}</span>
        </section>
      </Link>

      <div
        className={`card--votes ${isUpvoted ? "upvoted" : ""}`}
        onClick={handleUpvote}
      >
        <img
          className={`Upvotesbtn ${isUpvoted ? "upvoted" : "b "}`}
          src={arrowUp}
          alt="^"
        />
        <span className={`upvotes ${isUpvoted ? "upvoted" : ""}`}>{upvote}</span>
      </div>
      <div className="Comments--icon">
        <img src={CommentsImg} alt="comments" />
        <span>{comments}</span>
      </div>
    </div>
  );
};

export default Card;
