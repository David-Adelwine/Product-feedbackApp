import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Components/Post/PostSlice';
import { Link } from 'react-router-dom';
import '../Styles/Postlist.css';
const PostsList = () => {

  // comment data returns list of comments and user data
  const commenData = useSelector(selectAllPosts);

// new code updates testing and  returning the of James Skinner 

const commentElements = commenData.data.productRequests.flatMap((productRequest) => {
  if (productRequest.comments) {
    return productRequest.comments.map((comment) => {
      if (
        comment.user.username === 'hexagon.bestagon' ||
        comment.user.username === 'hummingbird1'
      ) {
        const replies = comment.replies
          ? comment.replies.map((reply) => (
              <div key={reply.user.username}>
                <img src={reply.user.image} alt='Person' className='user--image' />
                <div className='user--info'>
                  <h5 className='name'>{reply.user.name}</h5>
                  <h5 className='userName'>@{reply.user.username}</h5>
                </div>
                <p className='post--content'>{reply.content}</p>
                <hr />
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
const renderfeedback = posts.data.productRequests.map(post =>(
<article  key = {post.id}  className='new--post '>
<p className='new--comment'>{ post.content}
</p>
</article> 
));


  return (
    <div>
      <div className='userData'>
      <p className='Num--comment'> 4 comments </p>
        {commentElements}
        </div>
    <div >{renderfeedback}</div>     
    </div>
  )
}

export default PostsList