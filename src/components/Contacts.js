import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {money, humanDate, tick} from '../helpers';

Tabs.setUseDefaultStyles(false);

import Row from './Row';

export default class Contacts extends React.Component {

  render() {

  const {activeClient} = this.props.clients;

    return (

      <Tabs onSelect={this.handleSelect} key="Contacts">
        <TabList className="nav nav-tabs">
          {activeClient.contacts.map((contact,i) =>
            <Tab key={i}><span>{contact.first_name} {contact.last_name}</span></Tab>
          )}
        </TabList>

        {activeClient.contacts.map((contact,i) =>
          <TabPanel key={i} className="tab-content">
            <div className="row">
              <div className="two-columns">
                <div className="row">
                  <legend>Personal details</legend>
                </div>
                <Row business={this.props.clients.activeClient.is_business} data={{
                  'Title': contact.title,
                  'First name': contact.first_name,
                  'Middle name': contact.middle_name,
                  'Last name': contact.last_name,
                  'Previous name': contact.previous_name,
                  'Salutation': contact.salutation,
                  'Date of birth': humanDate(contact.dob),
                  'Age': contact.age,
                  'Gender': contact.gender,
                  '__Is principal': tick(contact.is_principal),
                  'Email': contact.email,
                  'Home phone': contact.home_phone,
                  'Work phone': contact.work_phone,
                  'Mobile phone': contact.mobile_phone,
                  'Preferred phone': contact.preferred_phone,
                  'Preferred time': contact.preferred_time,
                  'Address 1': contact.address_1,
                  'Address 2': contact.address_2,
                  'Address 3': contact.address_3,
                  'Address 4': contact.address_4,
                  'Postcode': contact.postcode,
                  'Country': contact.country,
                  'Marital status': contact.marital_status,
                  'Smoker': tick(contact.smoker),
                  'Smoked recently': tick(contact.smoked_recently),
                  'Good health': tick(contact.good_health),
                  'Interests': contact.interests,
                  'Drinks preference': contact.drinks_preference,
                  'Are there any social, ethical, environmental or religious considerations we should be aware?': tick(contact.considerations),
                  'Notes': contact.considerations_details
                }} />
                <div className="row">
                  <legend>Residence and domicile</legend>
                </div>
                <Row business={this.props.clients.activeClient.is_business} data={{
                  'Resident': contact.resident,
                  'Nationality': contact.nationality,
                  'Domicilie': contact.domicilie,
                  'Previously worked outside uk': tick(contact.previously_worked_outside_uk),
                  'Plan to work outside uk': tick(contact.plan_to_work_outside_uk)
                }} />
                {this.props.clients.activeClient.is_business &&
                  <div>
                    <div className="row">
                      <legend>Principal details</legend>
                    </div>
                    <Row business={this.props.clients.activeClient.is_business} data={{

                      '__Position': contact.position,
                      '__Percentage owned': contact.percentage_owned + '%',
                      '__Date joined': humanDate(contact.date_joined),
                      '__Spouse in business': tick(contact.spouse_in_business),
                      '__Number of children': contact.number_of_children
                    }} />
                    <div className="row">
                      <legend>Principal renumeration</legend>
                    </div>
                    <Row business={this.props.clients.activeClient.is_business} data={{
                      '__Salary': money(contact.salary),
                      '__Dividends': money(contact.dividends),
                      '__Tax rate': contact.tax_rate,
                      '__Pensions cont': money(contact.pensions_cont)
                    }} />
                  </div>
                }
              </div>
            </div>

          </TabPanel>
          )}
      </Tabs>
    )
  }
};
