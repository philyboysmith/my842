import { browserHistory } from 'react-router';
import { CALL_API } from '../middleware/api';

import BASE_URL from './index';

export function resetState() {
  return {
    type: 'RESET_STATE',
  };
}

function requestLogin(creds) {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    token: user.token,
  };
}

function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

function requestLogout() {
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true,
  };
}

function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false,
  };
}

export function fetchClients() {
  return {
    [CALL_API]: {
      endpoint: 'clients',
      authenticated: true,
      types: ['CLIENTS_SUCCESS', 'CLIENTS_FAILURE'],
    },
  };
}

export function fetchAnnualReview(clientId) {
  return {
    [CALL_API]: {
      endpoint: `clients/${clientId}/annual_review`,
      authenticated: true,
      types: ['ANNUAL_REVIEW_SUCCESS', 'ANNUAL_REVIEW_FAILURE'],
    },
  };
}

export function fetchTeam(clientId) {
  return {
    [CALL_API]: {
      endpoint: `clients/${clientId}/team`,
      authenticated: true,
      types: ['TEAM_SUCCESS', 'TEAM_FAILURE'],
    },
  };
}

export function setActiveClient(clients, id) {
  if (clients) {
    const i = clients.findIndex(client => client.id === parseInt(id, 10));
    const client = clients[i];
    return {
      type: 'SET_ACTIVE_CLIENT',
      client,
    };
  }
  return {};
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('state');
    localStorage.removeItem('token');
    localStorage.removeItem('clients');
    dispatch(receiveLogout());
    browserHistory.push('/');
  };
}

export function emptyStateAndLogoutUser() {
  return (dispatch) => {
    dispatch(logoutUser());
    dispatch(resetState());
  };
}

export function resetError() {
  return {
    type: 'RESET_ERROR',
  };
}

// Calls the API to get a token and
// dispatches actions along the way
export function loginUser(creds) {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `email=${creds.email}&password=${creds.password}`,
  };

  return (dispatch) => {
    dispatch(requestLogin(creds));
    return fetch(`${BASE_URL}authenticate`, config)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 401 || response.status === 403) {
          dispatch(emptyStateAndLogoutUser());
          throw new Error('Invalid credentials');
        }
        if (response.status === 500) {
          throw new Error('Server error');
        }
      })
      .then((user) => {
        localStorage.setItem('token', user.token);
        dispatch(receiveLogin(user));
        dispatch(fetchClients());
      })
      .catch(error => dispatch(loginError(error.message)));
  };
}

