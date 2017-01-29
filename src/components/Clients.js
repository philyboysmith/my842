import React from 'react';

import Login from './Login';

import { Link } from 'react-router';

import moment from 'moment';


export default class Clients extends React.Component {

	render() {
	    const { isAuthenticated } = this.props.auth;
	    const { data } = this.props.clients;
	    const { isLoaded } = this.props.clients;

		return (
			<div key="Clients">

			{(isLoaded && isAuthenticated && data) &&
				<table>
					<thead>
						<tr>
							<th>Member name</th>
							<th>Financial Planner</th>
							<th>Technical Specialist</th>
							<th>Annual review date</th>
						</tr>
					</thead>
					<tbody>

					{data &&
						data.map((client, i) =>
							<tr key={i}>
								<td ><Link to={`/clients/${client.id}`} >{client.name}</Link></td>
								<td >{client.financial_planner}</td>
								<td >{client.technical_specialist}</td>
								<td >{moment(client.review_date).format('MMMM Y')}</td>
							</tr>

						)
					}
					</tbody>


				</table>

			}
			{!isAuthenticated &&
			<Login {...this.props}
             />
			}
			</div>
		)
	}
}

