import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';
import * as saveActionCreators from '../actions/save';

import Main from './Main';

function mapStateToProps(state) {
  const API_URL = process.env.NODE_ENV === 'production' ?
    'https://a2.eightfourtwo.com/api/v1/' : 'https://admin.842.local/api/v1/';

  return {
    api_url: API_URL,
    clients: state.clients,
    auth: state.auth,
    team: state.team,
    routing: state.routing,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, actionCreators, saveActionCreators), dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
