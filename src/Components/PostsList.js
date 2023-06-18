import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Components/Post/PostSlice';
import { Link } from 'react-router-dom';
import '../Styles/Postlist.css';
const PostsList = () => {

  // comment data returns list of comments and user data
  const commenData = useSelector(selectAllPosts);
  const commentElements = commenData.data.productRequests.flatMap((productRequest) => {
    if (productRequest.comments) {
      return productRequest.comments.map((comment) => (
        <article key={comment.id} className='commentData' >
          <img src={comment.user.image} alt='Person'  className='user--image'/>
          <div className='user--info'>
          <h5 className='name'>{comment.user.name}</h5>
          <h5 className='userName'>@{comment.user.username}</h5>
          </div>
          <Link className='commentLink'>Reply</Link>
          <p className='post--content'>{comment.content}</p>
          <hr/>
        </article>
      ));
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
      <p>4 Comments</p>
      <div className='userData'>
      <p>15 comments </p>
        {commentElements}
        </div>
    <div >{renderfeedback}</div>     
    </div>
  )
}

export default PostsList