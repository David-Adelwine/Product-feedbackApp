import React, { useState } from 'react'
import '../Styles/Comment.css'
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded } from '../Feature/Post/PostSlice';
 

const Comments = () => {
  const dispatch= useDispatch();
const [content,setcontent]=useState('')


const onContentChanged=e=>setcontent(e.target.value)
const onSavepostClicked=()=>{
  if(content){
    dispatch(
      postAdded({
        id:nanoid(),
        content
      })
    )
    setcontent('')

  }
}

  return (
    <div className='Form--elements' >
      <form>
        <label htmlFor='postContent'>Add Comments </label>
          <textarea className='comment--box'
           name="postContent" 
           rows={3} cols={89}
            placeholder='Write your comments here' 
            value={content}
          id="postContent"
          onChange={onContentChanged}
          />
        <br/>
        <p className='comment--direction'>250 characters left</p>
        <br/>
        <button
         onClick={onSavepostClicked} 
         type="button"  
         className=' commentbtn homebtn'
         >Post Comment</button>
        </form>
      
    </div>
  );
};

export default Comments



