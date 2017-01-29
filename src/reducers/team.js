const defaultState = {
  isFetching: false,
  isLoaded: false,
  data: {},
};

function team(state = defaultState, action) {
  switch (action && action.type) {
    case 'TEAM_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        data: action.response,
      });
    case 'TEAM_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
      });
    case 'RESET_STATE':
      return defaultState;
    default:
      return state;
  }
}

export default team;
