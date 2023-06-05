import React from 'react'
import Comments from '../Components/Comments'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Feature/Post/PostSlice';
const Feedbackedit = () => {

const posts = useSelector( selectAllPosts )
const renderfeedback = posts.map(post =>(
  <article  key = {post.id} >
      <p>{typeof post.content === 'string' ? post.content.substring(0, 100) : ''}
      </p>
  </article> 
))
  return (
    <div>
      {renderfeedback}  
<Comments/>  
 </div>
  )
}

export default Feedbackedit