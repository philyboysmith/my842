import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import api from './middleware/api';
import invalidToken from './middleware/invalidToken';

import { loadState, saveState } from './localStorage';

import rootReducer from './reducers/index';

import { resetError } from './actions/auth';

const persistedState = loadState();

const logger = createLogger({ collapsed: true });

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, api, invalidToken, logger)(createStore);

const store = createStoreWithMiddleware(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

browserHistory.listen(() => store.dispatch(resetError()));

store.dispatch(resetError());

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
