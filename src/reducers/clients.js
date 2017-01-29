const defaultState = {
  isFetching: false,
  isLoaded: false,
  data: {},
  activeClient: {},
};

function clients(state = defaultState, action) {
  switch (action && action.type) {
    case 'CLIENTS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
      });
    case 'CLIENTS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isLoaded: true,
        data: action.response,
      });
    case 'CLIENTS_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        isLoading: false,
        data: null,
        activeClient: null,
      });
    case 'SET_ACTIVE_CLIENT':
      return Object.assign({}, state, {
        activeClient: action.client,
      });
    case 'RESET_STATE':
      return defaultState;
    default:
      return state;
  }
}

export default clients;
