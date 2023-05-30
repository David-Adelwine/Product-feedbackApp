import React from "react"
import Header from '../Components/Header'
import Navigation from "../Components/Navigation"
import '../App.css'
import data from "../data"
import Cards from "../Components/Cards"

export default function Roadmap(){
  const cardElements = data.productRequests.map(cards=>{
    return <Cards  title={cards.title}
      description={cards.description}
     category={cards.category} 
     upvotes={cards.upvotes}
     />
  })

  return(
    <div>
      <Header/>
      <Navigation/>
      {cardElements}
    </div>
  )
}