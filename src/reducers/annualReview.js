function annualReview(state = {}, action) {
  switch (action && action.type) {
    case 'ANNUAL_REVIEW_SUCCESS':
      return Object.assign({}, state, action.response);
    default:
      return state;
  }
}

export default annualReview;
