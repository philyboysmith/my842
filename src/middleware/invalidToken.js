export const actionsThatImplyInvalidToken = [
  'CLIENTS_FAILURE', 'TEAM_FAILURE', 'ANNUAL_REVIEW_FAILURE',
  'POST_REVISION_FAILURE',
];

function invalidTokenMiddleware() {
  return next => (action) => {
    if (actionsThatImplyInvalidToken.includes(action.type) && action.error === 'token_expired') {
      localStorage.removeItem('token');
      return next({ type: 'RESET_STATE' });
    }
    return next(action);
  };
}

export default invalidTokenMiddleware;
