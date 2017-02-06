function annualReview(state = {}, action) {
  switch (action && action.type) {
    case 'ANNUAL_REVIEW_SUCCESS':
      return Object.assign({}, state, { data: action.response });
    case 'RESET_STATE':
      return {};
    default:
      return state;
  }
}

export default annualReview;
