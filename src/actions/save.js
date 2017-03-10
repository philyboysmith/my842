import BASE_URL from './index';
import { emptyStateAndLogoutUser } from './auth';

export function requestPostAnnualReview(clientId, data) {
  return {
    type: 'POST_ANNUAL_REVIEW',
    payload: {
      clientId,
      data,
    },
  };
}

export function receivePostAnnualReview(data) {
  return {
    type: 'POST_ANNUAL_REVIEW_SUCCESS',
    payload: {
      data,
    },
  };
}

export function errorPostAnnualReview(error) {
  return {
    type: 'POST_ANNUAL_REVIEW_FAILURE',
    payload: {
      error,
    },
  };
}

export function postAnnualReview(clientId, data) {
  const config = {
    method: 'PATCH',
    // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    headers: { 'Content-Type': 'application/json' },
    body: data,
  };

  return async (dispatch) => {
    dispatch(requestPostAnnualReview());
    try {
      const response = await fetch(`${BASE_URL}clients/${clientId}/annual-review`, config);
      const { status, ok } = response;
      if (status === 401 || status === 403) {
        dispatch(emptyStateAndLogoutUser());
        throw new Error('Invalid credentials');
      }
      if (status === 402) {
        throw new Error('Invalid data');
      }
      if (status === 500) {
        throw new Error('Server error');
      }
      if (ok) {
        const results = await response.json();
        dispatch(receivePostAnnualReview(results));
      }
    } catch (error) {
      dispatch(errorPostAnnualReview(error));
    }
  };
}
