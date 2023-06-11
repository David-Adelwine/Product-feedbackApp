import React, { useState } from 'react'
import '../Styles/AddPost.css'
import { useDispatch } from 'react-redux';
import { postAdded } from './Post/PostSlice';
 

const AddPost = () => {
    const dispatch= useDispatch();
    const [content,setcontent]=useState('')
    const onContentChanged=e=>setcontent(e.target.value)

    const onSavepostClicked=()=>{
      if(content){
        dispatch(
          postAdded(
            content
          )
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
           placeholder='Type your comments here' 
           value={content}
           id="postContent"
           onChange={onContentChanged}s
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

export default AddPost



