import React from 'react';


export default class Client extends React.Component {


  componentDidMount() {
  	if(this.props.auth.isAuthenticated) this.props.setActiveClient(this.props.clients.data, this.props.params.clientID)
  }

	render() {

		return (
			<div key="Client">
        		<h1>Hello world</h1>
			</div>
		)
	}
};
