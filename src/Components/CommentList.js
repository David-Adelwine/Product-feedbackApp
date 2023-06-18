import React from 'react'

// import data from '../data'

const Comment = (props) => {
//   const commentsContent = data.productRequests.map((request) =>
//   request.comments.map((comment) => comment.content)
// );
// console.log(commentsContent);

// const allComments = [];
// data.productRequests.forEach((productRequest) => {
//   if (productRequest.comments) {
//     allComments.push(...productRequest.comments);
//   }
// });

//  const commentElemment= allComments.map((comment)=>{
//   return (
//     <comment 
//     img={comment.user.img}
//     name={comment.user.name}
//     username={comment.user.user}
//     content = {comment.content}
//     />
//     )
//  })

//  console.log(commenElemment)

  return (
    <div>
        <img src={props.img} alt='Person'/>
        <h3>{props.name}</h3>
        <h5>{props.username}</h5>
        <p>{props.content}</p>
    </div>
  )
}

export default Comment






