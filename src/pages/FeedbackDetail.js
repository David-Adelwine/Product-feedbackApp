import React from "react"
import Header from '../Components/Header'
// import Navigation from "../Components/Navigation"
// import '../App.css'
import data from "../data"
import Cards from "../Components/Cards"
// import '../Styles/Roadmap.css' 


export default function FeedbackDetail(){
   // Calculate the number of elements to be returned
  const cardLength = Math.ceil(data.productRequests.length/2);

 
  // Use Array.prototype.slice() to create a new array with half the elements
  const cardElements = data.productRequests.slice(0,cardLength);
// console.log(cardLength)
    // Map through the CardElements array and render the each card

  const renderedElements = cardElements.map((cards, index)=>{
    return(
      < Cards 
      key={index} 
      title={cards.title}
      description={cards.description}
     category={cards.category} 
     upvotes={cards.upvotes}
     />
    )
  })

  //console.log(renderedElements); checking if the exact number can retrieved on the dom
  return(
    <div>
      <Header />
      {/* <Navigation/> */}
      {renderedElements}
    </div>
  )
}