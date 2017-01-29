import React from 'react';

import Navbar from './Navbar';

import Breadcrumbs from './Breadcrumbs';

import ClientNav from './ClientNav';

import EasyTransition from 'react-easy-transition';

import { browserHistory } from 'react-router';

class Main extends React.Component {

	componentWillMount() {
		if(location.pathname !== '/' && !this.props.auth.isAuthenticated) browserHistory.push('/');
		if(this.props.auth.isAuthenticated) {
	         this.props.fetchClients().then((clients) =>  {
	         	if(this.props.params.clientID)  {
	         		this.props.setActiveClient(clients.response, this.props.params.clientID)
	         		return this.props.fetchAnnualReview(this.props.params.clientID);
	         	}
	         })
	         .catch((response) => {

	         })
	      }
	}

	componentDidMount() {

	}

	render() {

		const route = this.props.routes[this.props.routes.length - 1]

		let title = route.title


		if (this.props.clients.activeClient && this.props.clients.activeClient.is_business && route.business_title) {

			title = route.business_title


		}

		return (

				<div>

				<Navbar {...this.props} />

			    <main id="main" className="clearfix">

			    	{this.props.auth.isAuthenticated &&
				    	<Breadcrumbs {...this.props} title={title}/>
				    }

			    	{this.props.auth.isAuthenticated &&
			            <h2 className="page-title">{title}</h2>
				    }

        			{(this.props.params.clientID && this.props.clients) &&
			            <div className="row">
							<ClientNav clients={this.props.clients} activeClient={this.props.clients.activeClient} />
			            </div>
			        }
					<EasyTransition
					    path={location.pathname}
					    initialStyle={{opacity: 0}}
					    transition="opacity 0.2s ease-in"
					    finalStyle={{opacity: 1}}
					>
						{React.cloneElement(this.props.children, this.props)}
					</EasyTransition>

				</main>

				</div>

		)
	}
}
export default Main;