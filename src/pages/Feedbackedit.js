import React from 'react'
import AddPost from '../Components/AddPost'
import Goback from '../Components/Goback';
import PostsList from '../Components/PostsList';
import Onecard from '../Components/Onecard';



const Feedbackedit = () => {

  return (
    <div>
      <Goback/>
      <Onecard/>
      <PostsList/>
      <AddPost/>  
 </div>
  )
}

export default Feedbackedit