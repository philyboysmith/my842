const BASE_URL = 'http://admin.eightfourtwo.com/api/v1/';

async function callApi(endpoint, authenticated) {
  const token = localStorage.getItem('token') || null;
  const config = authenticated && token ? { headers: { Authorization: `Bearer ${token}` } } : null;
  if (!config) {
    throw new Error('No token saved!');
  }

  return await fetch(`${BASE_URL}${endpoint}`, config);
}

export const CALL_API = Symbol('Call API');

function callApiMiddlware() {
  return next => async function asyncMiddleware(action) {
    const callAPI = action[CALL_API];

    // So the middleware doesn't get applied to every single action
    if (typeof callAPI === 'undefined') {
      return next(action);
    }

    const { endpoint, authenticated, types } = callAPI;
    const [successType, errorType] = types;

    // Passing the authenticated boolean back in our data will let us distinguish between normal
    // and secret quotes
    try {
      const response = await callApi(endpoint, authenticated);
      const jsonResponse = await response.json();
      if (response.ok) {
        return next({
          response: jsonResponse,
          authenticated,
          type: successType,
        });
      }
      throw new Error(jsonResponse.error || 'Unspecified error occurred');
    } catch (error) {
      return next({
        error: error.message || 'There was an error.',
        type: errorType,
      });
    }
  };
}

export default callApiMiddlware;
