import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {money, humanDate, tick} from '../helpers';

import Row from './Row';

export default class Employments extends React.Component {

render() {

  const {contacts} = this.props.clients.activeClient
  return (
    <div key="Employments">
    {contacts &&
      <Tabs onSelect={this.handleSelect} >
      <TabList className="nav nav-tabs">
      {contacts.map((contact,i) =>
        <Tab key={i}><span>{contact.first_name} {contact.last_name}</span></Tab>
        )}
        </TabList>

        {contacts.map((contact,i) =>
          <TabPanel key={i} className="tab-content">
          {contact.employment &&
            <div className="row">
            <div className="two-columns">
            <div className="row">
            <legend>Employment Details</legend>
            </div>
            <Row data={{
              'Status': contact.employment.status,
              'Occupation': contact.employment.occupation,
              'Employer': contact.employment.employer,
              'Start date': humanDate(contact.employment.start_date),
            }} />

            <div className="row">
            <legend>Tax Details</legend>
            </div>
            <Row data={{
              'Tax year': contact.employment.tax_year,
              'Tax rate': contact.employment.tax_rate,
              'CGT allowance used': tick(contact.employment.allowance_used),
              'CGT losses to carry forward': tick(contact.employment.losses_to_carry),
              'CGT preference': contact.employment.cgt_pref,
              'National Insurance number': contact.employment.ni_number,
              'Tax reference': contact.employment.tax_reference,
            }} />

            <div className="row">
            <legend>Income for Tax Year</legend>
            </div>
            <Row data={{
              'All employment': money(contact.employment.income_employment),
              'Benefits in kind': money(contact.employment.income_benefits_in_kind),
              'UK land and property': money(contact.employment.income_property),
              'Foreign income': money(contact.employment.income_foreign_income),
              'Foreign dividends': money(contact.employment.income_foreign_dividends),
              'UK interest': money(contact.employment.income_interest),
              'UK dividends': money(contact.employment.income_dividends),
              'UK pensions and state benefits': money(contact.employment.income_pensions),
              'Other income': money(contact.employment.income_other),
              'Gross annual income': money(contact.employment.gross_annual_income),
              'Net monthly income': money(contact.employment.income_net_monthly_income),
            }} />
            <div className="row">
            <legend>Employee Benefits</legend>
            </div>
            <Row data={{
              'Death in service': tick(contact.employment.benefits_death),
              'Critical illness': tick(contact.employment.benefits_critical_illness),
              'Income Protection': tick(contact.employment.benefits_income_protection),
              'Private medical insurance': tick(contact.employment.benefits_medical_insurance),
              'Pension scheme': tick(contact.employment.benefits_pension),
            }} />
            </div>
            </div>
          }
          {!contact.employment &&
            <p>No employment details found.</p>
          }

          </TabPanel>
          )}

          </Tabs>
        }
        </div>
        )}
    };
