import React from 'react'
import AddPost from '../Components/AddPost'
import Goback from '../Components/Goback';
import PostsList from '../Components/PostsList';



const Feedbackedit = () => {

  return (
    <div>
      <Goback/>
      <PostsList/>
      <AddPost/>  
 </div>
  )
}

export default Feedbackedit