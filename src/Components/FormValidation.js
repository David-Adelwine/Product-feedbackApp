
// const FormValidation = (values) => {

//   const errors={}
// if(values.FeedbackTitle===''){
//   errors.FeedbackTitle="your Feedback title is requires";
// }

// if(values.postContent===''){
//   errors.postContent="please enter the content of your feedback";
// }
//   return errors;
// }

// export default FormValidation



const FormValidation = (values) => {
  const errors = {};
  if (values.FeedbackTitle === '') {
    errors.FeedbackTitle = 'Your Feedback title is required.';
  }

  if (values.postContent === '') {
    errors.postContent = 'Please enter the content of your feedback.';
  }

  return errors;
};

export default FormValidation;