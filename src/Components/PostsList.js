import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Components/Post/PostSlice';
import { Link } from 'react-router-dom';
import '../Styles/Postlist.css';


const PostsList = () => {
const commentData = useSelector(selectAllPosts);

const commentElements = commentData.data.productRequests.flatMap((productRequest) => {
  if (productRequest.comments) {
    return productRequest.comments.map((comment) => {
      if (
        comment.user.username === 'hexagon.bestagon' ||
        comment.user.username === 'hummingbird1' ||
        comment.user.username === 'annev1990' ||
        // taking only the first of reply comment of Ryan Welles as per the design 
        comment.user.username[0] === 'voyager.344'
      ) {
        const replies = comment.replies
          ? comment.replies.map((reply) => (
              <div key={reply.user.username}>
                <img src={reply.user.image} alt='Person' className='user--image' />
                <div className='user--info'>
                  <h5 className='name'>{reply.user.name}</h5>
                  <h5 className='userName'>@{reply.user.username}</h5>
                </div>
                <Link className='commentLink'>Reply</Link>
                <p className='post--content'><span className='ReplyingTo'>@{reply.replyingTo}</span> {reply.content}</p>
              </div>
            ))
          : null;

        return (
          <article key={comment.id} className='commentData'>
            <img src={comment.user.image} alt='Person' className='user--image' />
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
      }
      return null;
    });
  }
  return [];
});





// post allow for adding comments to the exist productRequest array 
const posts = useSelector( selectAllPosts) 
const renderFeedback = posts.data.productRequests.map(post =>(
<article  key = {post.id}  className='new--post '>
<p className="new-post-content">{post.content}</p>
</article> 
));

  return (
    <div>
      <div className='userData'>
      <p className='Num--comment'> 4 comments </p>
        {commentElements}
        </div>
    <div >{renderFeedback}</div>     
    </div>
  )
}

export default PostsList









