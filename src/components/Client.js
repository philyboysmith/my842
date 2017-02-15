import React from 'react';


class Client extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (this.props.auth.isAuthenticated) {
      this.props.setActiveClient(this.props.clients.data, this.props.params.clientID);
    }
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default Client;
