import React from 'react';
import Input from './Input';
import '../Styles/reply-box.css';

export default function ReplyBox({ show, reply, setReply, postReply }) {
  return (
    show && (
      <div className='reply-box'>
        <Input
          value={reply}
          setValue={setReply} // Pass the setReply function to update the state
          maxLength={255}
          placeholderText='Type your reply here'
          type='textarea'
        />
        <button className='Replybtn btn-primary' onClick={postReply}>
          Post Reply
        </button>
      </div>
    )
  );
}
