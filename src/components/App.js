import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';

import Main from './Main';

function mapStateToProps(state) {
  const API_URL = process.env.NODE_ENV === 'production' ?
    'http://a2.eightfourtwo.com/api/v1/' : 'http://admin.842.local/api/v1/';

  return {
    api_url: API_URL,
    clients: state.clients,
    auth: state.auth,
    team: state.team,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
