import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllPosts } from './Post/PostSlice'
import CommentsImg from '../Assets/shared/icon-comments.svg'
import '../Styles/Roadmap.css'
import ArrowUp from '../Assets/shared/icon-arrow-up.svg'

const RoadmapData = () => {

  const RoadmapData = useSelector(selectAllPosts);

  const countByStatus = RoadmapData.data.productRequests.reduce((counts, request) => {
    counts[request.status] = (counts[request.status] || 0) + 1;
    return counts;
  }, {});

  const plannedRequests = RoadmapData.data.productRequests
  .filter(request => request.status === 'planned')
  .map(request => (
    <div key={request.id} className='Card--planned'>
      <p className='card--category'>Planned </p>
      <h3 className='card--title'>{request.title}</h3>
      <p className='cards--description'>{request.description}</p>
      <span className='categories'>{request.category}</span>
      <br/>
      <span className='Numb--upvotes'> <img src={ArrowUp}  alt='^' className='upvotes--icon'/> {request.upvotes}</span>
      <div className=' Roadmapcard--comments'>
        <img src={CommentsImg} alt='comments'/> 
      </div>

      {/* Render additional information about the planned request */}
    </div>
  ));

const liveRequests = RoadmapData.data.productRequests
  .filter(request => request.status === 'live')
  .map(request => (
    <div key={request.id} className='Card--live'>
      <p className='card--category'>Live</p>
      <h3 className='card--title'>{request.title}</h3>
      <p className='cards--description'>{request.description}</p>
      <span className='categories'>{request.category}</span>
      <br/>
      <span className='Numb--upvotes'> <img src={ArrowUp}  alt='^' className='upvotes--icon'/>  {request.upvotes}</span>
      <div className=' Roadmapcard--comments'>
      <img src={CommentsImg} alt='comments'/>
      </div>

      {/* Render additional information about the live request */}
    </div>
  ));

const inProgressRequests = RoadmapData.data.productRequests
  .filter(request => request.status === 'in-progress')
  .map(request => (
    <div key={request.id} className='Card--progress'>
      <p className='card--category'> In-progress</p>
      <h3 className='card--title'>{request.title}</h3>
      <p className='cards--description'>{request.description}</p>
      <span className='categories'>{request.category}</span>
      <br/>
      <span className='Numb--upvotes'> <img src={ArrowUp}  alt='^' className='upvotes--icon'/>  {request.upvotes}</span>
      <div className=' Roadmapcard--comments'>
        <img src={CommentsImg} alt='comments'/>
      </div>
      {/* Render additional information about the in-progress request */}
    </div>
  ));

  return (
    <div className='Roadmap--Cards'>
          <div className='Column' >
                <div className='section--headers planned--header'>
                <h3 className='section--heading'>Planned ({countByStatus['planned']})</h3>
                <p className='header--content'>ideas priotise for research</p>
                </div>
             {plannedRequests}
          </div>
          <div  className='Column' >
              <div className='section--headers inProgress--header'>
              <h3 className='section--heading'>In-Progress({countByStatus['in-progress']})</h3>
              <p className='header--content'>currently being developed</p>
              </div>
            {inProgressRequests}
          </div>

    <div  className='Column' >
            <div className='section--headers live--header' >
            <h3 className='section--heading'>Live ({countByStatus['live']})</h3>
            <p className='header--content'>released features</p>
            </div>
         {liveRequests}
      </div>
    </div>
  )
}

export default RoadmapData


