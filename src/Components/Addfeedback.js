import React from 'react'
import { useSelector } from "react-redux";
import { selectAllFeedbacks } from './Addfeedback/AddfeedbackSlice';

const Addfeedback = () => {
  const Feedback = useSelector(selectAllFeedbacks)
  const renderFeedback=Feedback.map(Feedback=>(
    <article key={Feedback.id}>
   <h3>{Feedback.title}</h3>
   <p>{Feedback.category.substring(0,100)}</p>
    </article>
  ))
  return (
    <div>
 <section>
  <h2>Post</h2>
  {renderFeedback}
 </section>
    </div>
  )
}

export default Addfeedback