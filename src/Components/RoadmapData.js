
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAllPosts } from './Post/PostSlice';
import CommentsImg from '../assets/shared/icon-comments.svg';
import '../Styles/Roadmap.css';
import ArrowUp from '../assets/shared/icon-arrow-up.svg';
import { Link } from 'react-router-dom';

const RoadmapData = () => {
  const RoadmapData = useSelector(selectAllPosts);
  const countByStatus = RoadmapData.data.productRequests.reduce((counts, request) => {
    counts[request.status] = (counts[request.status] || 0) + 1;
    return counts;
  }, {});
  const [upvotesCount, setUpvotesCount] = useState({});

  // Function to handle upvote click event
  const handleUpvoteClick = (requestId, currentUpvotes) => {
    const currentCount = upvotesCount[requestId] || currentUpvotes;
    setUpvotesCount({ ...upvotesCount, [requestId]: currentCount + 1 });
  };

  const renderRequests = (status) =>
    RoadmapData.data.productRequests
      .filter((request) => request.status === status)
      .map((request) => (
        <div key={request.id} className={`Card--${status}`}>
          <p className='card--category'>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
          <Link to={`/feedbackedit/${request.id}`} style={{ textDecoration: 'none' }}>
            <h3 className='card--title'>{request.title}</h3>
            <p className='cards--description'>{request.description}</p>
          </Link>
          <span className='categories'>{request.category}</span>
          <br />
          <span className='Numb--upvotes'>
            <img
              src={ArrowUp}
              alt='^'
              className='upvotes--icon'
              onClick={() => handleUpvoteClick(request.id, request.upvotes)}
            />
            {upvotesCount[request.id] !== undefined ? upvotesCount[request.id] : request.upvotes}
          </span>
          <div className='Roadmapcard--comments'>
            <img src={CommentsImg} alt='comments' />
            <span className='Roadmap--comments'>{request.comments ? request.comments.length : 0}</span>
          </div>
        </div>
      ));

  return (
    <div className='Roadmap--Cards'>
      <div className='Column'>
        <div className='section--headers planned--header'>
          <h3 className='section--heading'>Planned ({countByStatus['planned']})</h3>
          <p className='header--content'>ideas prioritize for research</p>
        </div>
        {renderRequests('planned')}
      </div>

      <div className='Column'>
        <div className='section--headers inProgress--header'>
          <h3 className='section--heading'>In-Progress ({countByStatus['in-progress']})</h3>
          <p className='header--content'>currently being developed</p>
        </div>
        {renderRequests('in-progress')}
      </div>

      <div className='Column'>
        <div className='section--headers live--header'>
          <h3 className='section--heading'>Live ({countByStatus['live']})</h3>
          <p className='header--content'>released features</p>
        </div>
        {renderRequests('live')}
      </div>
    </div>
  );
};

export default RoadmapData;






