
import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Components/Post/PostSlice';
import { Link, useParams } from 'react-router-dom';
import '../Styles/Postlist.css';

const PostsList = () => {
  // Get the card ID from the URL
  const { id } = useParams();

  // Get all the posts from the data.js file
  const allPosts = useSelector(selectAllPosts);

  // Find the selected card based on the ID
  const selectedCard = allPosts.data.productRequests.find((card) => card.id === parseInt(id));

  // Check if the selected card exists and has comments
  if (!selectedCard || !selectedCard.comments) {
    return <div className='userData'>
     <p className='post--content'>Card not found or no comments available</p> 
      </div>;
  }

  // Function to render comments and replies
  const renderCommentsAndReplies = (comments) => {
    return comments.map((comment) => {
      const replies = comment.replies
        ? comment.replies.map((reply) => (
            <div key={reply.id}>
            <img src={`../${reply.user.image}`} alt='Person' className='user--image' />
              <div className='user--info'>
                <h5 className='name'>{reply.user.name}</h5>
                <h5 className='userName'>@{reply.user.username}</h5>
              </div>
              <Link className='commentLink'>Reply</Link>
              <p className='post--content'>
                <span className='ReplyingTo'>@{reply.replyingTo}</span> {reply.content}
              </p>
            </div>
          ))
        : null;

      return (
        <article key={comment.id} className='commentData'>
          <img src={`../${ comment.user.image}`} alt='Person' className='user--image' />
          <div className='user--info'>
            <h5 className='name'>{comment.user.name}</h5>
            <h5 className='userName'>@{comment.user.username}</h5>
          </div>
          <Link className='commentLink'>Reply</Link>
          <p className='post--content'>{comment.content}</p>
          <div className='Replies-comment'>{replies}</div>
          <hr />
        </article>
      );
    });
  };

  return (
    <div>
      <div className='userData'>
        <p className='Num--comment'>{selectedCard.comments.length}comments</p>
        {renderCommentsAndReplies(selectedCard.comments)}
      </div>
    </div>
  );
};

export default PostsList;
