import React from 'react';

export default class Team extends React.Component {

	componentDidMount() {
		this.props.fetchTeam(this.props.params.clientID);
	}

	render() {

		const {data} = this.props.team;

		return (
			<div key="Team">
				<div className="gallery">

						{(data && data.length > 0) &&
							data.map((person, i) =>

								<figure key={i} className="headshot">
								{person.image &&
									<img className="avatar" src={person.image} alt={person.name}/>
								}
									<figcaption>
										<p>{person.name}</p>
										<p>Job title</p>
										<p>Direct dial</p>
										<p>Mobile</p>
										<a href="mailto:{person.email}">{person.email}</a>
										{person.my_financial_planner &&
											<p><strong>My financial Planner</strong></p>
										}
										{person.my_technical_specialist &&
											<p><strong>My financial Planner</strong></p>
										}
									</figcaption>
								</figure>
							)
						}

				</div>
			</div>
		)
	}
}

