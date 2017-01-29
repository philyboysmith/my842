import React from 'react';
import Reactable from 'reactable';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {money, humanDate, tick} from '../helpers';

import Row from './Row';

export default class Benefits extends React.Component {

render() {

  const {death_in_service} =  this.props.clients.activeClient;
  const {group_income_protection} =  this.props.clients.activeClient;
  const {group_critical_illness} =  this.props.clients.activeClient;
  const {pmi_benefits} =  this.props.clients.activeClient;
  const {pension_benefits} =  this.props.clients.activeClient;

  const Table = Reactable.Table,
        Tr = Reactable.Tr;

  const benefit = function (type, multiple, level, scheme_type, less_state_benefit) {
    if(type === 'Percentage of salary') {
      if (scheme_type === 'Group income protection') {
        if (less_state_benefit !== 'None') {
          return multiple + '% of scheme salary (' + less_state_benefit + ')';
        } else {
          return multiple + '% of scheme salary';
        }
      } else {
          return multiple + ' times scheme salary';
      }
    }
    if(type === 'Level') return money(level)
  }

  return (
     <div key="Benefits">
        <Tabs onSelect={this.handleSelect} >
        <TabList className="nav nav-tabs">
          <Tab><span>Death in Service Schemes</span></Tab>
          <Tab><span>Group Income Protection Schemes</span></Tab>
          <Tab><span>Group Critical Illness Schemes</span></Tab>
          <Tab><span>Private Medical Insurance Schemes</span></Tab>
          <Tab><span>Pension Schemes</span></Tab>
        </TabList>

          <TabPanel className="tab-content">
                {death_in_service &&
                  death_in_service.map((scheme,i) => {

                    const data = {
                      'Scheme type': scheme.scheme_type,
                      'Scheme name': scheme.scheme_name,
                      'Trustee': scheme.trustee,
                      'PSTR': scheme.pstr,
                      'Provider': scheme.provider,
                      'Scheme number': scheme.scheme_number,
                      'Premium frequency': scheme.premium_frequency,
                      'Free cover limit': money(scheme.free_cover_limit),
                      'Unit rate type': scheme.unit_rate_type,
                      'Unit rate type per mille': scheme.unit_rate_type_per_mille,
                      'Annual premium at last accounting date': money(scheme.gross_premium),
                      'Renewal due': humanDate(scheme.renewal_due),
                      'Notes': scheme.notes,
                    }
                    if (data['Unit rate type'] === 'Single priced') delete data['Unit rate type per mille'];

                    return (
                      <div key="i">
                      <Row data={data} />
                      <Table className="table">
                          {scheme.categories &&
                            scheme.categories.map((category,i) => {

                              return <Tr key={i}
                              data={{
                                'Category number': category.category_number,
                                'Category name': category.category_name,
                                'Benefit': benefit(category.benefit_type, category.benefit_multiple, category.benefit_currency, scheme.benefit_type, 'None'),
                              }} />
                            }

                          )}
                      </Table>
                      </div>
                      )

                  })
              }




          </TabPanel>
          <TabPanel className="tab-content">
              {group_income_protection &&
                  group_income_protection.map((scheme,i) => {

                    const data = {
                      'Scheme name': scheme.scheme_name,
                      'Provider': scheme.provider,
                      'Scheme number': scheme.scheme_number,
                      'Premium frequency': scheme.premium_frequency,
                      'Free cover limit': money(scheme.free_cover_limit),
                      'Unit rate type': scheme.unit_rate_type,
                      'Unit rate (per cent of scheme salary)': scheme.unit_rate_type_per_mille,
                      'Annual premium at last accounting date': money(scheme.gross_premium),
                      'Renewal due': humanDate(scheme.renewal_due),
                      'Notes': scheme.notes,
                    }

                    if (data['Unit rate type'] === 'Single priced') delete data['Unit rate (per cent of scheme salary)'];

                    return (
                      <div key="i">
                      <Row data={data} />
                      <Table className="table">
                          {scheme.categories &&
                            scheme.categories.map((category,i) => {

                              return <Tr key={i}
                              data={{
                                'Category number': category.category_number,
                                'Category name': category.category_name,
                                'Benefit': benefit(category.benefit_type, category.benefit_multiple, category.benefit_currency, scheme.benefit_type, category.less_state_benefits),
                              }} />
                            }

                          )}
                      </Table>
                      </div>
                      )
                  })
              }
          </TabPanel>
          <TabPanel className="tab-content">
              {group_critical_illness &&
                  group_critical_illness.map((scheme,i) => {

                    const data = {
                      'Scheme name': scheme.scheme_name,
                      'Provider': scheme.provider,
                      'Scheme number': scheme.scheme_number,
                      'Premium frequency': scheme.premium_frequency,
                      'Free cover limit': money(scheme.free_cover_limit),
                      'Unit rate type': scheme.unit_rate_type,
                      'Unit rate (per mille of scheme benefit)': scheme.unit_rate_type_per_mille,
                      'Annual premium at last accounting date': money(scheme.gross_premium),
                      'Renewal due': humanDate(scheme.renewal_due),
                      'Notes': scheme.notes,
                    }

                    if (data['Unit rate type'] === 'Single priced') delete data['Unit rate (per mille of scheme benefit)'];

                    return (
                      <div key="i">
                      <Row data={data} />
                      <Table className="table">
                          {scheme.categories &&
                            scheme.categories.map((category,i) => {

                              return <Tr key={i}
                              data={{
                                'Category number': category.category_number,
                                'Category name': category.category_name,
                                'Benefit': benefit(category.benefit_type, category.benefit_multiple, category.benefit_currency, scheme.benefit_type, 'None'),
                              }} />
                            }

                          )}
                      </Table>
                      </div>
                      )

                  })
              }
              </TabPanel>
          <TabPanel className="tab-content">
          {pmi_benefits &&
                  pmi_benefits.map((scheme,i) => {

                    const data = {
                      'Scheme type': scheme.scheme_type,
                      'Scheme name': scheme.scheme_name,
                      'Provider': scheme.provider,
                      'Scheme number': scheme.scheme_number,
                      'Premium frequency': scheme.premium_frequency,
                      'Gross annual premium': money(scheme.gross_premium),
                      'Renewal due': humanDate(scheme.renewal_due),
                      'Notes': scheme.notes,
                    }

                    if (data['Unit rate type'] === 'Single priced') delete data['Unit rate (per mille of scheme benefit)'];

                    return (
                      <div key="i">
                      <Row data={data} />
                      <Table className="table">
                          {scheme.pmi_categories &&
                            scheme.pmi_categories.map((category,i) => {

                              return <Tr key={i}
                              data={{
                                'Category number': category.category_number,
                                'Category name': category.category_name,
                              }} />
                            }

                          )}
                      </Table>
                      </div>
                      )

                  })
              }
              </TabPanel>
          <TabPanel className="tab-content">
            {pension_benefits &&
                  pension_benefits.map((scheme,i) => {

                    const data = {
                      'Scheme type': scheme.scheme_type,
                      'Scheme name': scheme.scheme_name,
                      'Provider': scheme.provider,
                      'Start date':scheme.start_date,
                      'Scheme start date':tick(scheme.qualifying_scheme),
                      'Default AE scheme':tick(scheme.default_ae_scheme),
                      'Setup fee (from scheme provider)':money(scheme.setup_fee),
                      'Ongoing fee (from scheme provider)':money(scheme.ongoing_fee),
                      'Annual management charge':scheme.amc,
                      'Total expense ratio':scheme.ter,
                      'Renewal due':scheme.renewal_due,
                      'Active members':scheme.active_members,
                      'Inactive members':scheme.inactive_members,
                      'Members with scheme NRA':scheme.members_with_nra,
                      'Notes':scheme.notes
                    }

                    return (
                      <div key="i">
                      <Row data={data} />
                      <Table className="table">
                          {scheme.pension_categories &&
                            scheme.pension_categories.map((category,i) => {
                              return <Tr key={i}
                              data={{
                                'Category number': category.category_number,
                                'Category name': category.category_name,
                                'Default investment strategy': category.default_investment_strategy,
                              }} />
                            }
                          )}
                      </Table>
                      </div>
                      )
                  })
              }
          </TabPanel>
        </Tabs>
      </div>
    )
  }
};
