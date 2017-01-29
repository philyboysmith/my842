import fetch from 'isomorphic-fetch';

const BASE_URL = 'http://a2.eightfourtwo.com/api/v1/';

function callApi(endpoint, authenticated) {
  const token = localStorage.getItem('token') || null;
  const config = authenticated && token ? { headers: { Authorization: `Bearer ${token}` } } : null;
  if (!config) {
    throw new Error('No token saved!');
  }

  return fetch(`${BASE_URL}${endpoint}`, config)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Response was bad!');
    })
    .then(responseJson => responseJson)
    .catch(error => console.error(error));
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  const callAPI = action[CALL_API];

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endpoint, authenticated, types } = callAPI;
  const [successType, errorType] = types;

  // Passing the authenticated boolean back in our data will let us distinguish between normal
  // and secret quotes
  return callApi(endpoint, authenticated)
    .then(response => next({
      response,
      authenticated,
      type: successType,
    }))
    .catch(error => next({
      error: error.message || 'There was an error.',
      type: errorType,
    }));
};
