import React from 'react';
import Reactable from 'reactable';

import {transformData, percentage, transformContacts, money, humanDate} from '../helpers';

export default class Properties extends React.Component {

	render() {

    const {properties} =  this.props.clients.activeClient;
    const {leaseholds} =  this.props.clients.activeClient;
    const {is_business} =  this.props.clients.activeClient;

    const Table = Reactable.Table,
          Tr = Reactable.Tr;

    const clean = function (str) {
      if(str === null || str === undefined) return '';
      return str;
    }

    return (
      <div key="Properties">
        {is_business &&
            <div>
              <h2>Leaseholds</h2>

              <Table className="table table-striped">
                {leaseholds &&

                  leaseholds.map((leasehold,i) => {
                    let data = {

                        'Address': leasehold.address_1 + ' ' + clean(leasehold.address_2) + ' ' + clean(leasehold.address_3) + ' ' + clean(leasehold.address_4) + ' ' + leasehold.postcode + ' ' + leasehold.country,
                        'Unexpired term of lease / rental ': leasehold.term,
                        'Rental income': money(leasehold.rental_expenditure),
                        'Notes': leasehold.notes
                     }

                    data = transformData(data, this.props.clients.activeClient.is_business);

                    return <Tr key={i}
                      data={data} />
                  }

                )}
              </Table>


              <h2>Freeholds</h2>
            </div>
        }
            <Table className="table table-striped">
                {properties &&

                  properties.map((property,i) => {
                    let data = {
                        '__Owner': property.owner,
                        'Basis of ownership': property.basis_of_ownership,
                        'Percentage owned': percentage(property.percentage_owned),
                        'Owner(s)': transformContacts(property.contacts),
                        'Property details': property.property_details,
                        'Property value': money(property.property_value),
                        'Contents value': money(property.content_value),
                        'Purchase date': humanDate(property.purchase_date),
                        'Purchase price': money(property.purchase_price),
                        'Rental income': money(property.rental_income),
                        'Address': property.address_1 + ' ' + clean(property.address_2) + ' ' + clean(property.address_3) + ' ' + clean(property.address_4) + ' ' + property.postcode + ' ' + property.country,
                        'Notes': property.notes
                     }

                    data = transformData(data, this.props.clients.activeClient.is_business);

                    return <Tr key={i}
                      data={data} />
                  }

                )}
            </Table>

      </div>
    )
	}
};
