/* eslint-disable */
import React from 'react';
import Reactable from 'reactable';

import {money, humanDate, tick} from '../helpers';

import LifetimeGifts from './LifetimeGifts';

export default class Estates extends React.Component {



render() {

  const {contacts} =  this.props.clients.activeClient;

  const {lifetime_gifts} =  this.props.clients.activeClient;

  const Table = Reactable.Table,
            Tr = Reactable.Tr,
            Td = Reactable.Td;


  const data = [];
  const assets = [];
  const notes = [];
    data.push(['Will made']);
    data.push(['Date made']);
    data.push(['Last updated']);
    data.push(['Any potential IHT implications?']);
    data.push(['Property and financial power of attorney?']);
    data.push(['Date made']);
    data.push(['Health and welfare power of attorney?']);
    data.push(['Date made']);
    data.push(['Enduring power of attorney?']);
    data.push(['Date made']);
    assets.push(['Property (UK)']);
    assets.push(['Property (overseas)']);
    assets.push(['Contents (UK)']);
    assets.push(['Contents (overseas)']);
    assets.push(['Life assurance (not in trust)']);
    assets.push(['Pension benefits (not in trust)']);
    assets.push(['Savings']);
    assets.push(['Investments (not in trust)']);
    assets.push(['Business interests']);
    assets.push(['Other']);
    assets.push(['Total assets']);
    assets.push(['Less liabilities (calculated from Loans and Mortgages)']);
    assets.push(['Net assets']);
    notes.push(['Notes']);

    let totalNetAssets = 0;

  {contacts && contacts.map((contact, i) => {
    if (contact.estate) {
      data[0][contact.first_name] = tick(contact.estate.will_made);
      data[1][contact.first_name] = humanDate(contact.estate.will_date);
      data[2][contact.first_name] = humanDate(contact.estate.will_date_updated);
      data[3][contact.first_name] = tick(contact.estate.implications);
      data[4][contact.first_name] = tick(contact.estate.property_welfare_poa);
      data[5][contact.first_name] = humanDate(contact.estate.property_welfare_poa_date);
      data[6][contact.first_name] = tick(contact.estate.health_welfare_poa);
      data[7][contact.first_name] = humanDate(contact.estate.health_welfare_poa_date);
      data[8][contact.first_name] = tick(contact.estate.enduring_poa);
      data[9][contact.first_name] = humanDate(contact.estate.enduring_poa_date);
      assets[0][contact.first_name] = money(contact.estate.property_uk);
      assets[1][contact.first_name] = money(contact.estate.property_overseas);
      assets[2][contact.first_name] = money(contact.estate.contents_uk);
      assets[3][contact.first_name] = money(contact.estate.contents_overseas);
      assets[4][contact.first_name] = money(contact.estate.life_assurance);
      assets[5][contact.first_name] = money(contact.estate.pension_benefits);
      assets[6][contact.first_name] = money(contact.estate.savings);
      assets[7][contact.first_name] = money(contact.estate.investments);
      assets[8][contact.first_name] = money(contact.estate.business_interests);
      assets[9][contact.first_name] = money(contact.estate.other);
      assets[10][contact.first_name] = money(contact.estate.total_assets);
      assets[11][contact.first_name] = money(contact.estate.liabilities);
      assets[12][contact.first_name] = money(contact.estate.total_assets - contact.estate.liabilities);
      totalNetAssets += contact.estate.total_assets - contact.estate.liabilities;
      notes[0][contact.first_name] = contact.estate.notes;
    } else {
      data[0][contact.first_name] = '–';
      data[1][contact.first_name] = '–';
      data[2][contact.first_name] = '–';
      data[3][contact.first_name] = '–';
      data[4][contact.first_name] = '–';
      data[5][contact.first_name] = '–';
      data[6][contact.first_name] = '–';
      data[7][contact.first_name] = '–';
      data[8][contact.first_name] = '–';
      data[9][contact.first_name] = '–';
      assets[0][contact.first_name] = '–';
      assets[1][contact.first_name] = '–';
      assets[2][contact.first_name] = '–';
      assets[3][contact.first_name] = '–';
      assets[4][contact.first_name] = '–';
      assets[5][contact.first_name] = '–';
      assets[6][contact.first_name] = '–';
      assets[7][contact.first_name] = '–';
      assets[8][contact.first_name] = '–';
      assets[9][contact.first_name] = '–';
      assets[10][contact.first_name] = '–';
      assets[11][contact.first_name] = '–';
      assets[12][contact.first_name] = '–';
      notes[0][contact.first_name] = '–';
    }
  })

  if(contacts) {
        data[0]['Joint estate'] = '–';
        data[1]['Joint estate'] = '–';
        data[2]['Joint estate'] = '–';
        data[3]['Joint estate'] = '–';
        data[4]['Joint estate'] = '–';
        data[5]['Joint estate'] = '–';
        data[6]['Joint estate'] = '–';
        data[7]['Joint estate'] = '–';
        data[8]['Joint estate'] = '–';
        data[9]['Joint estate'] = '–';
        assets[0]['Joint estate'] = money(this.props.clients.activeClient.joint_property_uk_estate);
        assets[1]['Joint estate'] = money(this.props.clients.activeClient.joint_property_overseas_estate);
        assets[2]['Joint estate'] = money(this.props.clients.activeClient.joint_contents_uk_estate);
        assets[3]['Joint estate'] = money(this.props.clients.activeClient.joint_contents_overseas_estate);
        assets[4]['Joint estate'] = money(this.props.clients.activeClient.joint_life_assurance_estate);
        assets[5]['Joint estate'] = money(this.props.clients.activeClient.joint_pension_benefits_estate);
        assets[6]['Joint estate'] = money(this.props.clients.activeClient.joint_savings_estate);
        assets[7]['Joint estate'] = money(this.props.clients.activeClient.joint_investments_estate);
        assets[8]['Joint estate'] = '–';
        assets[9]['Joint estate'] = '–';
        assets[10]['Joint estate'] = money(this.props.clients.activeClient.joint_total_assets_estate);
        assets[11]['Joint estate'] = money(this.props.clients.activeClient.joint_liabilities_estate_estate);
        assets[12]['Joint estate'] = money(this.props.clients.activeClient.joint_total_assets_estate - this.props.clients.activeClient.joint_liabilities_estate);
        notes[0]['Joint estate'] = '–';
        totalNetAssets += this.props.clients.activeClient.joint_total_assets_estate - this.props.clients.activeClient.joint_liabilities;
  }

  }


  return (
      <div key="Estates">

      <Table className="table table-striped table-estate" data={data} />
      {contacts &&
      <Table className="table table-striped table-estate" data={assets}>
          <Tr>
            <Td column='0'>Total Net Assets</Td>
            <Td column={contacts[0].first_name}>{money(totalNetAssets)}</Td>
          </Tr>
          <Tr data={notes[0]} />
      </Table>

      }

      {lifetime_gifts &&
        <LifetimeGifts {...this.props} />
      }
      </div>

  )

}
};
