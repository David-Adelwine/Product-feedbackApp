import React from 'react'
import Onecard from './Onecard'
import data from '../data'

const SingleCard = () => {
  const cardData = data.productRequest.map((feedbackComment)=>{
    return(
      < Onecard 
       key={feedbackComment.id}
      title={feedbackComment.title}
      description={feedbackComment.description}
     category={feedbackComment.category} 
     upvotes={feedbackComment.upvotes}
     />
    )
  })
  console.log(cardData)
  return (
    <div>
    {cardData}
    </div>
  )
}

export default SingleCard