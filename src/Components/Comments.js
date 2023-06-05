import React from 'react'
import '../Styles/Comment.css'
const Comments = () => {
  return (
    <div className='Form--elements' >
      
        <label className='comment--box'>
          <p>Add Comments</p>
          <textarea name="postContent" rows={3} cols={89} placeholder='Write your comments here' />
        </label>
        <br/>
        <p className='comment--direction'>250 characters left</p>
        <br/>
        <button type="button"  className=' commentbtn homebtn' >Post Comment</button>
      
    </div>
  );
};

export default Comments



