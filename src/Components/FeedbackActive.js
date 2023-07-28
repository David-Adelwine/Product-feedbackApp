
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { FeedbackAdded } from './Addfeedback/AddfeedbackSlice'
import FeedbackActiveImg from '../assets/shared/icon-edit-feedback.svg'
import '../Styles/FeedbackActive.css'
import FormValidation from './FormValidation'

const Addfeedbackform = () => {
  const dispatch = useDispatch();
 
  const [categoryId, setCategoryId] = useState('');

  const [values, setValues] = useState({
    FeedbackTitle: '',
    postContent: '',
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  }

  function handleFormValidation(e) {
    e.preventDefault();
    setErrors(FormValidation(values));

    if (Object.keys(errors).length === 0) {
      onSaveFeedbackClicked();
    }
  }

  const onCategoryChanged = (e) => setCategoryId(e.target.value);

  const onSaveFeedbackClicked = () => {
    if (values.FeedbackTitle && values.postContent) {
      dispatch(FeedbackAdded(values.FeedbackTitle, values.postContent, categoryId));
      setValues({ FeedbackTitle: '', postContent: '' });
      setCategoryId('');
    }
  };
 
 
  const onRemoveFeedback = () => {
    setValues({ FeedbackTitle: '', postContent: '' });
    setCategoryId('');
  };

  return (
    <div className='FeedbackActive--Container'>
      <img src={FeedbackActiveImg} alt=" + "  className='Feedbackimage' />
      <h2 className='FeedbackHeader'>Editing 'Add a dark theme option'</h2>
       <form onSubmit={handleFormValidation}>
          <h3 className='Title'>Feedback Title</h3>
            <label htmlFor="" className='FeedbackDesc'>Add a short, descriptive headline</label>
            <br />
            <input type="text" 
            id="FeedbackTitle"
            name="FeedbackTitle"
            value={values.FeedbackTitle}
            onChange={handleInput}
            className='Title--input'
            placeholder='please add a dark theme option'
            />
            {errors.FeedbackTitle && <p className='Error--msg'>{errors.FeedbackTitle}</p>}


          <div className=''>
          <h3 className='Title'>Category</h3>

            <label htmlFor="feedbackcategory" className='FeedbackDesc'>Choose a category for your feedback
            </label>
            <br />
            <select id="PostCategory" value={categoryId} onChange={onCategoryChanged} className='Select--category'>
            <option value="Feature">Feature</option> 
            <hr/>
            <option value="">UI</option> 
            <hr/>
            <option value="UI">UX</option> 
            <hr/>
            <option value="Enhancement">Enhancement</option> 
            <hr/>
            <option value="Bug">Bug</option> 
            </select>
            </div>

            <div className=''>
          <h3 className='Title'>Update status</h3>

            <label htmlFor="feedbackcategory" className='FeedbackDesc'>Change Feedback state 
            </label>
            <br />
            <select id="PostCategory" value={categoryId} onChange={onCategoryChanged} className='Select--category'>
            <option value="Suggestion">suggestion</option>
            <hr/>
            <option value="Planned">Planned</option>
            <hr/>

            <option value="In-Progress">In-Progress</option>
            <hr/>

            <option value="Live">Live</option>
            </select>
            </div>
            

            <h3 className='Title'>FeedbackDetail</h3>
            <label htmlFor='postContent' className='FeedbackDesc'>Include any specific comments about what should be included, added etc. </label>
              <textarea className='Feedback--comment'
              name="postContent" 
              rows={3} 
              cols={89}
              placeholder='It would help people with light sensitivities and who prefer dark 
              mode.' 
              value={values.postContent}
              id="postContent"
              onChange={handleInput}
              />
             {errors.postContent && <p className='Error--msg'>{errors.postContent}</p>}

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
            type="submit"

            >
              Add Feedback
              </button>
              </div>
              
            
        </form>
      
    </div>
  )
}

export default Addfeedbackform