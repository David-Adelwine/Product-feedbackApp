import React from "react"
import Header from '../Components/Header'
import Cards from "../Components/Cards"
import { useSelector } from "react-redux"
import { selectAllPosts } from "../Components/Post/PostSlice"

export default function FeedbackDetail(){
  const FeedbackDetailData = useSelector(selectAllPosts)
   // Calculate the number of elements to be returned
  const cardLength = Math.ceil(FeedbackDetailData.data.productRequests.length/2);

 
  // Use Array.prototype.slice() to create a new array with half the elements
  const cardElements = FeedbackDetailData.data.productRequests.slice(0,cardLength);
// console.log(cardLength)
    // Map through the CardElements array and render each card

  const renderedElements = cardElements.map((cards, index)=>{
    // determing the number of comments under each productRequest including the replies array
    
    const commentsLength = cards.comments ? cards.comments.length : 0;
    const repliesLength = cards.comments ? cards.comments.reduce((count, comment) => count + (comment.replies ? comment.replies.length : 0), 0) : 0;
    const totalComments = commentsLength + repliesLength;

    return(
      < Cards 
      key={index} 
      title={cards.title}
      description={cards.description}
     category={cards.category} 
     upvotes={cards.upvotes}
     comments={totalComments}
     />
    )
  })

  //console.log(renderedElements); checking if the exact number can be retrieved on the dom
  return(
    <div>
      <Header/>
      {renderedElements}
    </div>
  )
}





