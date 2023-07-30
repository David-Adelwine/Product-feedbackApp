
import React, { useState } from 'react';
import arrowUp from '../assets/shared/icon-arrow-up.svg';
import CommentsImg from '../assets/shared/icon-comments.svg';
import '../Styles/SingleCard.css';

const Onecard = (props) => {
  const { title, description, category, totalComments } = props;

  const [upvotes, setUpvotes] = useState(props.upvotes);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setUpvotes(upvotes + 1);
      setIsUpvoted(true);
    } else {
      setUpvotes(upvotes - 1);
      setIsUpvoted(false);
    }
  };

  const cardVotesStyle = isUpvoted
    ? {
        backgroundColor: '#4661E6',
        border: '3px dotted #ccc',
        animation: 'borderAnimation 2s infinite',
      }
    : { backgroundColor: '#F2F4FF' };

  const upvotesStyle = isUpvoted ? { color: '#fff' } : { color: '#4661E6' };

  return (
    <div className='SingleCard--elements'>
      <section className='inner--card'>
        <h3 className='card--header'>{title}</h3>
        <p className='card--description'>{description}</p>
        <span className='faintbg--header'>{category}</span>
      </section>
      <div className='card--votes' style={cardVotesStyle} onClick={handleUpvote}>
        <img className='Upvotesbtn' style={upvotesStyle} src={arrowUp} alt='^' />
        <span className='upvotes' style={upvotesStyle}>
          {upvotes}
        </span>
      </div>
      <div className='Comments--icon'>
        <img src={CommentsImg} alt='comments' />
        <span>{totalComments}</span>
      </div>
    </div>
  );
};

export default Onecard;
