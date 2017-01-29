import React from 'react';

import {Link} from 'react-router';

class Breadcrumbs extends React.Component {


	render() {

		return (
			<div key="Breadcrumb" className="row">
				<ol className="breadcrumb">
					<li><Link to={`/`}>Home</Link></li>
					{this.props.clients.activeClient &&
						<li><Link to={`/clients/${this.props.clients.activeClient.id}`}>{this.props.clients.activeClient.name}</Link></li>
					}
					<li>{this.props.title}</li>
				</ol>
			</div>

		)
	}
}
export default Breadcrumbs;