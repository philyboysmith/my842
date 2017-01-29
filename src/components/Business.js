import React from 'react';

import Row from './Row';

import {whoIsThis, money, humanDate, percentage} from '../helpers';

export default class Business extends React.Component {

	render() {

      const {business} =  this.props.clients.activeClient;

      if (business !== undefined ) {

        return (
              <div key="Business" className="two-columns">
                  <div className="row">
                  <legend>Business Details</legend>
                  </div>
                  <Row data={{
                    'Business name' : business.business_name,
                    'Trading name' : business.trading_name,
                    'Address 1' : business.address_1,
                    'Address 2' : business.address_2,
                    'Address 3' : business.address_3,
                    'Address 4' : business.address_4,
                    'Postcode' : business.postcode,
                    'Country' : business.country,
                    'Main contact' : whoIsThis(business.contact_id,this.props.clients.activeClient.contacts) ,
                    'Alternative contact' : whoIsThis(business.alt_contact_id,this.props.clients.activeClient.contacts),
                    'Business type' : business.business_type,
                    'Nature of business' : business.nature_of_business,
                    'Company type' : business.company_type,
                    'Number of full time employees' : business.number_of_full_time_employees,
                    'Number of part time employees' : business.number_of_part_time_employees,
                    'Total number of employees' : business.total_number_of_employees,
                    'Date established' : humanDate(business.date_established),
                    'Trading year end' : humanDate(business.trading_year_end),
                    'Company or trust registration number' : business.company_registration
                  }} />
                <div className="row">
                  <legend>Last Year Finances</legend>
                </div>
                  <Row data={{
                    'Turnover': money(business.last_year_turnover),
                    'Gross profit': money(business.last_year_gross_profit),
                    'Net profit': money(business.last_year_net_profit),
                    'Corporation tax': money(business.last_year_corporation_tax),
                    'Corporation tax rate': percentage(business.last_year_tax_rate),
                    'Last year dates': business.last_year_dates,
                  }} />

                <div className="row">
                  <legend>Previous Year Finances</legend>
                </div>
                <Row data={{
                  'Turnover': money(business.projected_turnover),
                  'Gross profit': money(business.projected_gross_profit),
                  'Net profit': money(business.projected_net_profit),
                  'Corporation tax': money(business.projected_corporation_tax),
                  'Corporation tax rate': percentage(business.projected_tax_rate),
                  'Previous year dates': business.projected_dates,
                }} />

                <div className="row">
                  <legend>Management and Future Business Planning</legend>
                </div>
                <Row data={{
                  'Management layer / structure details including principals': business.management_layer,
                  'Short term': business.short_term,
                  'Long term': business.long_term,
                  'Forseeable difficulties': business.forseeable_difficulties,
                  'Notes': business.notes
                }} />
              </div>
            )

      }
      return (<p>No business details.</p>);




	}
};
