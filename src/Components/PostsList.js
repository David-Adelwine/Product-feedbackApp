import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllPosts } from '../Components/Post/PostSlice';



const PostsList = () => {

  const posts = useSelector( selectAllPosts )
  const renderfeedback = posts.map(post =>(
  <article  key = {post.id} >
      <p>{typeof post.content === 'string' ? post.content.substring(0, 100) : ''}
      </p>
  </article> 
))
  return (
    <div>
      <p>4 Comments</p>
      {renderfeedback}
    </div>
  )
}

export default PostsList