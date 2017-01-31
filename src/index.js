import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// Import Components
import App from './components/App';
import Clients from './components/Clients';
import Client from './components/Client';
import Meetings from './components/Meetings';
import Children from './components/Children';
import Contacts from './components/Contacts';
import Properties from './components/Properties';
import Advisers from './components/Advisers';
import Employments from './components/Employments';
import Loans from './components/Loans';
import Business from './components/Business';
import Successions from './components/Successions';
import Benefits from './components/Benefits';
import Estates from './components/Estates';
import Expenditures from './components/Expenditures';
import Team from './components/Team';
import Documents from './components/Documents';
import AnnualReview from './components/AnnualReview/AnnualReview';

const denyWithoutAuthentication = () => {
  if (!store.getState().auth.isAuthenticated && localStorage.getItem('token')) {
    browserHistory.push('/');
  }
};

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Clients} title="Clients"></IndexRoute>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID" component={Client} title=""></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/meetings" component={Meetings} title="My Meetings"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/children" component={Children} title="My Children and Dependents"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/contacts" component={Contacts} title="My Personal Details"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/properties" component={Properties} title="My Homes and Properties" business_title="My Leasehold / Freehold Property Details"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/advisers" component={Advisers} title="My Professional Advisers"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/employments" component={Employments} title="My Employments and Tax Details"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/loans" component={Loans} title="My Loans and Mortgages" business_title="My Business Loans and Mortgages"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/business" component={Business} title="My Business Details"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/successions" component={Successions} title="My Succesion Planning"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/benefits" component={Benefits} title="My Employee Benefits"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/estates" component={Estates} title="My Estate Planning"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/expenditures" component={Expenditures} title="My Expenditures"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/team" component={Team} title="My Team"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/documents" component={Documents} title="My Documents"></Route>
        <Route onEnter={denyWithoutAuthentication} path="/clients/:clientID/annual-review" component={AnnualReview} title="Annual Review"></Route>
      </Route>
    </Router>
  </Provider>
);

render(
  router,
  document.getElementById('root'),
);
