import React from 'react';

class Navbar extends React.Component {

	render() {

		const styles = {
		  width: 'auto',
		  maxHeight: '50px',
		}

		return (



				<nav className="navbar clearfix hidden-print">
			        <ul className="navbar__list">
			            <li>
			                <a className="navbar__logo "  href="/">
			                    <img src="/images/logo.png" alt="eightfourtwo" style={styles}/>
			                </a>
			            </li>
			            	{this.props.auth.isAuthenticated &&
			            	<li>
			            		<button onClick={() => this.props.fetchClients()}>Refresh</button>
			            		<button onClick={() => this.props.logoutUser()}>Logout</button>
			            	</li>
			            }
			        </ul>
			    </nav>


		)
	}
}
export default Navbar;