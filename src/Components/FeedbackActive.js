import React,{useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { FeedbackAdded } from './Addfeedback/AddfeedbackSlice'
import FeedbackActiveImg from '../Assets/shared/icon-edit-feedback.svg'
import '../Styles/FeedbackActive.css'
import { selectAllCategory } from './Category/CategorySlice'

const Addfeedbackform = () => {
  const dispatch=useDispatch()
  const [title, setTitle ] = useState('')
  const [content, setContent ] = useState('')
  const [categoryId, setCategoryId] = useState('')

  const categorys =useSelector(selectAllCategory)

  const onTitleChanged=e=>setTitle(e.target.value)
  const onContentChanged=e=>setContent(e.target.value)
  const onCategoryChanged=e=>setCategoryId(e.target.value)


   const  onSaveFeedbackClicked =()=>{
    if(title && content){
      dispatch(
        FeedbackAdded(title,content, categoryId)
      )
      setTitle('')
      setContent('')
    }
  }

  const CanAddFeedback=Boolean(title) && Boolean(content) && Boolean(categoryId)

  const CategoryOptions = categorys && categorys.map(preferredCategory=>(
    <option key={preferredCategory.id} value={preferredCategory.id}>
      {preferredCategory.name}
    </option>
  ))

  const  onRemoveFeedback =()=>{
    if(title && content){
      setTitle('')
      setContent('')
    }
  }

  return (
    <div className='FeedbackActive--Container'>
      <img src={FeedbackActiveImg} alt=" + "  className='Feedbackimage' />
      <h2 className='FeedbackHeader'>Editing 'Add a dark theme option'</h2>
       <form>
          <h3 className='Title'>Feedback Title</h3>
            <label htmlFor="" className='FeedbackDesc'>Add a short, descriptive headline</label>
            <br />
            <input type="text" 
            id="FeedbackTitle"
            name="FeedbackTitle"
            value={title}
            onChange={onTitleChanged}
            className='Title--input'
            />

          <div className=''>
          <h3 className='Title'>Category</h3>

            <label htmlFor="feedbackcategory" className='FeedbackDesc'>Choose a category for your feedback
            </label>
            <br />
            <select id="PostCategory" value={categoryId} onChange={onCategoryChanged} className='Select--category'>
            <option value="">Feature</option>
            {CategoryOptions}
            </select>
            </div>

            <div className=''>
          <h3 className='Title'>Update status</h3>

            <label htmlFor="feedbackcategory" className='FeedbackDesc'>Change Feedback state 
            </label>
            <br />
            <select id="PostCategory" value={categoryId} onChange={onCategoryChanged} className='Select--category'>
            <option value="">Planned</option>
            {CategoryOptions}
            </select>
            </div>
            

            <h3 className='Title'>FeedbackDetail</h3>
            <label htmlFor='postContent' className='FeedbackDesc'>Include any specific comments about what should be included, added etc. </label>
              <textarea className='Feedback--comment'
              name="postContent" 
              rows={3} 
              cols={89}
              placeholder='' 
              value={content}
              id="postContent"
              onChange={onContentChanged}
              />
            <br/>
            <div className='Feedback--btns'>

            <button
            className=' Delete--btn '
            onClick={onRemoveFeedback} 
            type="button"  
            >Delete</button>

            <button
            className='Removefeedbtn'
            onClick={onRemoveFeedback} 
            type="button"  
            >Cancel</button>
            <button 
            className='AddFeedbackbtn'
            onClick={onSaveFeedbackClicked} 
            type="button"
            disable={!CanAddFeedback}

            >
              Add Feedback
              </button>
              </div>
              
            
        </form>
      
    </div>
  )
}

export default Addfeedbackform