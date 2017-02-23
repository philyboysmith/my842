import BASE_URL from './index';

function requestPostAnnualReview(clientId, data) {
  return {
    type: 'POST_ANNUAL_REVIEW',
    payload: {
      clientId,
      data
    },
  };
}
function receivePostAnnualReview(data) {
  return {
    type: 'POST_ANNUAL_REVIEW_SUCCESS',
    payload: {
      data,
    },
  };
}
function errorPostAnnualReview(error) {
  return {
    type: 'POST_ANNUAL_REVIEW_FAILURE',
    payload: {
      error,
    },
  };
}

export function postAnnualReview(clientId, data) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data,
  };

  return (dispatch) => {
    dispatch(requestPostAnnualReview());
    return fetch(`${BASE_URL}clients/${clientId}/annual_review`, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 401 || response.status === 403) {
          dispatch(emptyStateAndLogoutUser());
          throw new Error('Invalid credentials');
        }
        if (response.status === 402) {
          // TODO: Do something on 402
        }
        if (response.status === 500) {
          throw new Error('Server error');
        }
      })
      .then(successData => dispatch(receivePostAnnualReview(successData)))
      .catch(error => dispatch(errorPostAnnualReview(error));
  };
}