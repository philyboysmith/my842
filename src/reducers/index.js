import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth';
import clients from './clients';
import team from './team';
import annualReview from './annualReview';

const rootReducer = combineReducers({ annualReview, auth, clients, team, routing: routerReducer });

export default rootReducer;
