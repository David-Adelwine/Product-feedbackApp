
import React, { useState } from "react";
import Header from "../Components/Header";
import Cards from "../Components/Cards";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../Components/Post/PostSlice";
import Navigation from "../Components/Navigation";

const FeedbackDetail = () => {
  const FeedbackDetailData = useSelector(selectAllPosts);
  const [sortOption, setSortOption] = useState("Most Upvotes");

  // Calculate the number of elements to be returned
  const cardLength = Math.ceil(FeedbackDetailData.data.productRequests.length / 2);

  // Use Array.prototype.slice() to create a new array with half the elements
  const cardElements = FeedbackDetailData.data.productRequests.slice(0, cardLength);

  // Define custom sorting functions based on the sort options
  const sortFunctions = {
    "Most Upvotes": (a, b) => b.upvotes - a.upvotes,
    "Least Upvotes": (a, b) => a.upvotes - b.upvotes,
    "Most Comments": (a, b) => getTotalComments(b) - getTotalComments(a),
    "Least Comments": (a, b) => getTotalComments(a) - getTotalComments(b),
  };

  // Get the total number of comments for a card
  const getTotalComments = (card) => {
    const commentsLength = card.comments ? card.comments.length : 0;
    const repliesLength = card.comments
      ? card.comments.reduce((count, comment) => count + (comment.replies ? comment.replies.length : 0), 0)
      : 0;
    return commentsLength + repliesLength;
  };

  // Handle sort option change
  const handleSortOptionClick = (option) => {
    setSortOption(option);
  };

  // Sort the cardElements array based on the selected sort option
  const sortedCardElements = cardElements.slice().sort(sortFunctions[sortOption]);

  return (
    <div>
      <Header />
      <Navigation onSortOptionClick = {handleSortOptionClick} selectedSortOption={sortOption} />
      {sortedCardElements.map((card, index) => (
        <Cards
          key={index}
          title={card.title}
          description={card.description}
          category={card.category}
          upvotes={card.upvotes}
          comments={getTotalComments(card)}
        />
      ))}
    </div>
  );
};

export default FeedbackDetail;
