import React, { useState } from 'react';
import arrowUp from '../Assets/shared/icon-arrow-up.svg';
import CommentsImg from '../Assets/shared/icon-comments.svg';
import '../Styles/SingleCard.css';
import { useSelector } from "react-redux"
import { selectAllPosts } from "../Components/Post/PostSlice"

const Onecard = (props) => {
  const { title, description, category, upvotes, totalComments } = props;

  const [cardUpvotes, setCardUpvotes] = useState(upvotes);

  const handleUpvote = () => {
    setCardUpvotes(cardUpvotes + 1);
  };

  return (
    <div className='SingleCard--elements'>
      <section className='inner--card'>
        <h3 className='card--header'>{title}</h3>
        <p className='card--description'>{description}</p>
        <span className='faintbg--header'>{category}</span>
      </section>
      <div className='card--votes'>
        <img
          className='Upvotesbtn'
          src={arrowUp}
          alt='^'
          onClick={handleUpvote}
        />
        <span className='upvotes'>{cardUpvotes}</span>
      </div>
      <div className='Comments--icon'>
        <img src={CommentsImg} alt='comments' />
        <span>{totalComments}</span>
      </div>
    </div>
  );
};

const SingleCard = () => {
  const SingleCardData=useSelector(selectAllPosts)
  const newData = SingleCardData.data.productRequests[1];
  const totalComments = newData.comments.length + getTotalReplyCount(newData.comments);

  // Recursive function to calculate the total number of replies
  function getTotalReplyCount(comments) {
    let count = 0;
    comments.forEach(comment => {
      if (comment.replies) {
        count += comment.replies.length;
        count += getTotalReplyCount(comment.replies); // Recursively calculate replies of replies
      }
    });
    return count;
  }

  return (
    <Onecard
      key={newData.id}
      title={newData.title}
      description={newData.description}
      category={newData.category}
      upvotes={newData.upvotes}
      totalComments={totalComments} // Pass totalComments as a prop
    />
  );
};

export default SingleCard;
