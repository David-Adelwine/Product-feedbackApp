import React, { useState } from "react";
import "../App.css";
import arrowUp from "../Assets/shared/icon-arrow-up.svg";
import CommentsImg from "../Assets/shared/icon-comments.svg";
import { Link } from "react-router-dom";
import "../Styles/Card.css";

const Cards = (props) => {
  const [upvotes, setUpvotes] = useState(props.upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setUpvotes(upvotes + 1);
    } else {
      setUpvotes(upvotes - 1);
    }
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className="Card--elements">
      <Link to={"../Feedbackedit"}>
        <section className="inner--card">
          <h3 className="card--header">{props.title}</h3>
          <p className="card--description">{props.description}</p>
          <span className="faintbg--header">{props.category}</span>
        </section>
      </Link>

      <div
        className={`card--votes ${isUpvoted ? "upvoted" : ""}`}
        onClick={handleUpvote}
      >
        <img
          className={`Upvotesbtn ${isUpvoted ? "upvoted" : ""}`}
          src={arrowUp}
          alt="^"
        />
        <span className={`upvotes ${isUpvoted ? "upvoted" : ""}`}>{upvotes}</span>
      </div>
      <div className="Comments--icon">
        <img src={CommentsImg} alt="comments" />
        <span>{props.comments}</span>
      </div>
    </div>
  );
};

export default Cards;









