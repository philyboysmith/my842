import React from 'react';

import {Link} from 'react-router';

export default class ClientNav extends React.Component {

	constructor(props) {
        super(props);
        this.showNav = this.showNav.bind(this);
    }

    showNav() {
        this.refs.menu.classList.toggle('client-nav__list--active');
    }

	componentDidMount() {
        this.refs.menuWrapper.addEventListener('click', this.showNav);
    }

    componentWillUnmount() {
        this.refs.menuWrapper.removeEventListener('click', this.showNav);
    }
	render() {

		if(this.props.clients.activeClient && this.props.clients.activeClient.is_business) {
			// Business nav
			return (

				<div ref="menuWrapper">
				{this.props.clients.activeClient &&
					<div className="client-nav hidden-print ">
						<ul ref="menu" className="client-nav__list">
						<li className="client-nav__item"><a href="#">Menu</a></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/team`}>My Team 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/documents`}>My Documents 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/meetings`}>My Meetings 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/contacts`}>My Personal Details 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/business`}>My Business Details 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/advisers`}>My Professional Advisers 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/properties`}>My Leasehold / Freehold Property Details 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/loans`}>My Business Loans and Mortgages 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/protections`}>My Protection for Principals, Key Persons and Guarantors</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/reitrements`}>My Retirement Planning for Principals</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/savings`}>My Business Savings and Investment Planning</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/successions`}>My Succession Planning 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/benefits`}>My Employee Benefits 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/annual-review/`}>Annual Review</Link></li>
						{this.props.clients.data.length > 1 &&

							<li className="client-nav__item"><Link to={`/`}>Switch clients 👍</Link></li>
						}
						</ul>
					</div>
				}
				</div>

		)

		}

		return (

				<div ref="menuWrapper">
				{this.props.clients.activeClient &&
					<div className="client-nav hidden-print ">
						<ul ref="menu" className="client-nav__list">
						<li className="client-nav__item"><a href="#">Menu</a></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/team`}>My Team 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/documents`}>My Documents 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/contacts`}>My Personal Details 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/children`}>My Children and Dependents 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/employments`}>My Employment and Tax Details 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/advisers`}>My Professional Advisers 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/properties`}>My Homes and Properties 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/loans`}>My Loans and Mortgages 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/protections`}>My Protection Planning</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/reitrements`}>My Retirement Planning</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/savings`}>My Saving and Investment Planning</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/estates`}>My Estate Planning 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/expenditures`}>My Expenditures 👍</Link></li>
						<li className="client-nav__item"><Link to={`/clients/${this.props.clients.activeClient.id}/annual-review/`}>Annual Review</Link></li>
						{this.props.clients.data.length > 1 &&
							<li className="client-nav__item"><Link to={`/`}>Switch clients 👍</Link></li>
						}
						</ul>
					</div>
				}
				</div>

		)
	}
};
