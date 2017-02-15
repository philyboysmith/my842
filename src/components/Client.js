import React from 'react';

class Client extends React.Component {
  componentWillMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.setActiveClient(this.props.clients.data, this.props.params.clientID);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.clients.activeClient.name}</h1>
        <p>Use the menu above to access client details.</p>
      </div>
    );
  }
}

Client.propTypes = {
  auth: React.PropTypes.object,
  clients: React.PropTypes.object,
  params: React.PropTypes.object,
  setActiveClient: React.PropTypes.func,
};

export default Client;
