
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FeedbackAdded } from './Addfeedback/AddfeedbackSlice';
import FeedbackImg from '../assets/shared/icon-new-feedback.svg';
import '../Styles/Feedbackform.css';
import FormValidation from './FormValidation';

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
    <div className="FeedbackContainer">
      <img src={FeedbackImg} alt=" + " className="Feedbackimage" />
      <h2 className="FeedbackHeader">Create A New Feedback</h2>
      <form onSubmit={handleFormValidation}>
        <h3 className="Title">Feedback Title</h3>
        <label htmlFor="FeedbackTitle" className="FeedbackDesc">
          Add a short, descriptive headline
        </label>
        <br />
        <input
          type="text"
          id="FeedbackTitle"
          name="FeedbackTitle"
          value={values.FeedbackTitle}
          onChange={handleInput}
          className="Title--input"
        />
        {errors.FeedbackTitle && <p className='Error--msg'>{errors.FeedbackTitle}</p>}

        <div>
          <h3 className="Title">Category</h3>
          <label htmlFor="PostCategory" className="FeedbackDesc">
            Choose a category for your feedback
          </label>
          <br />
          <select
            id="PostCategory"
            value={categoryId}
            onChange={onCategoryChanged}
            className="Select--category"
          >
            <option value="Feature">Feature</option>
            <option value="">UI</option>
            <option value="UI">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
          </select>
        </div>

        <h3 className="Title">Feedback Detail</h3>
        <label htmlFor="postContent" className="FeedbackDesc">
          Include any specific comments about what should be included, added, etc.
        </label>
        <textarea
          className="Feedback--comment"
          name="postContent"
          rows={3}
          cols={89}
          placeholder=""
          value={values.postContent}
          id="postContent"
          onChange={handleInput}
        />
        {errors.postContent && <p className='Error--msg'>{errors.postContent}</p>}
        <br />
        <div className="Feedback--btns">
          <button className="Removefeedbtn" onClick={onRemoveFeedback} type="button">
            Cancel
          </button>
          <button className="AddFeedbackbtn" type="submit" >
            Add Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addfeedbackform;







