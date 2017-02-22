import React from 'react';

import Collapsible from 'react-collapsible';

import {humanDate} from '../helpers';

export default class Documents extends React.Component {

	render() {

		const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://a2.eightfourtwo.com/api/v1/' : 'https://admin.842.local/api/v1/'

		const {activeClient} = this.props.clients;

		let {documents} = this.props.clients.activeClient;

	    const token = localStorage.getItem('token') || null

		documents = Object.keys(documents).map(function (key) { return documents[key]; });

		return (
			<div key="Documents" >

			{(activeClient && documents) &&

				documents.map((cat, i) => {
					if(cat.files.length > 0) {
						return <Collapsible key={i} trigger={cat.name}>
						{cat.files.map((file, i) => {
							return <a key={i} href={BASE_URL + 'clients/7/documents/' + file.id + '?token=' + token}>{file.title} ({humanDate(file.date)})</a>
						})}
						</Collapsible>
					} else {
						return <Collapsible key={i} trigger={cat.name} classParentString="Collapsible--empty Collapsible"></Collapsible>
					}
				}


				)
			}

			</div>

		)
	}
}

