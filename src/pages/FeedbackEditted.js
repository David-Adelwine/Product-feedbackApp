import React from "react";
import { useParams } from "react-router-dom";
import Onecard from "../Components/Onecard";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../Components/Post/PostSlice";

const FeedbackEditted = () => {
  const { id } = useParams();
  const allPosts = useSelector(selectAllPosts);
  const selectedCard = allPosts.data.productRequests.find(
    (card) => card.id === parseInt(id)
  );

  if (!selectedCard) {
    // Handle case if card with given id is not found
    return <div>Card not found</div>;
  }

  return (
    <div>
      <Onecard
        title={selectedCard.title}
        description={selectedCard.description}
        category={selectedCard.category}
        upvotes={selectedCard.upvotes}
        totalComments={getTotalComments(selectedCard)}
      />
    </div>
  );
};

export default FeedbackEditted;

// Helper function to calculate the total number of comments for a card
function getTotalComments(card) {
  const commentsLength = card.comments ? card.comments.length : 0;
  const repliesLength = card.comments
    ? card.comments.reduce((count, comment) => count + (comment.replies ? comment.replies.length : 0), 0)
    : 0;
  return commentsLength + repliesLength;
}
