import React, { useState } from 'react';
import "../App.css";
import arrowUp from '../Assets/shared/icon-arrow-up.svg';
import CommentsImg from '../Assets/shared/icon-comments.svg';
// import data from '../data';
import '../Styles/Card.css'



const Cards = (props) => {

  // const Requests = data.productRequests;

 const [upvotes, setUpvotes] = useState(props.upvotes);
  
// let commentsLength;
//   const Comments = Requests.map(request => {
//     commentsLength = request.comments ? request.comments.length : 0;
//     // console.log(`${commentsLength}`);
//     return commentsLength;
//   });
  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };


  return (
    <div className='Card--elements'>
      <section className='inner--card'>
        <h3 className='card--header'>{props.title}</h3>
        <p className='card--description'>{props.description}</p>
        <span className='faintbg--header'>{props.category}</span>
      </section>
      <div className='card--votes'>
        <img
          className='Upvotesbtn'
          src={arrowUp}
          alt='^'
          onClick={handleUpvote}
        />
        <span className='upvotes'>{upvotes}</span>
      </div>
      <div className='Comments--icon'>
        <img src={CommentsImg} alt='comments'/>
        <span>{4}</span>
      </div>
    </div>
  );
};

export default Cards;
