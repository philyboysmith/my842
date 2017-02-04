function annualReview(state = {}, action) {
  switch (action && action.type) {
    case 'ANNUAL_REVIEW_SUCCESS':
      return Object.assign({}, state, { data: action.response });
    default:
      return state;
  }
}

export default annualReview;
