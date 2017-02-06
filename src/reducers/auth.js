const defaultState = {
  isFetching: false,
  isAuthenticated: false,
};

function auth(state = defaultState, action) {
  switch (action && action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      });
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        token: action.token,
      });
    case 'LOGIN_FAILURE':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      });
    case 'LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      });
    case 'RESET_STATE':
      return defaultState;
    case 'RESET_ERROR':
      return Object.assign({}, state, { errorMessage: '' });
    default:
      return state;
  }
}

export default auth;
