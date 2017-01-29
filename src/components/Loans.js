import React from 'react';
import Reactable from 'reactable';

import {transformData, transformContacts, tick, money, humanDate} from '../helpers';

export default class Loans extends React.Component {

	render() {

    const {loans} =  this.props.clients.activeClient;

    const Table = Reactable.Table,
          Tr = Reactable.Tr;

    return (
      <div key="Loans">
            <Table className="table table-striped">
                {loans.length > 0 &&
                  loans.map((loan,i) => {

                    let property = loan.property ? loan.property.address_1 : 'N/A';

                    let data = {
                        '__Borrower': loan.who_is_the_borrower,
                        'Owner(s)': transformContacts(loan.contacts),
                        'Related property': property,
                        'Lender': loan.lender,
                        'Type of borrowing': loan.type_of_borrowing,
                        'Interest rate type': loan.interest_type,
                        'Expiry date': humanDate(loan.expiry_date),
                        'Interest rate': loan.interest_rate + '%',
                        'Outstanding balance': money(loan.outstanding_balance),
                        'Date of outstanding balance': humanDate(loan.date_of_outstanding_balance),
                        'Repayment amount': money(loan.repayment_amount),
                        'Start date': humanDate(loan.start_date),
                        'Original term': loan.original_term + ' years',
                        'Penalities': tick(loan.penalty_to_pay),
                        'Protected': tick(loan.borrowing_protected),
                        'Notes': loan.notes,
                     }

                    data = transformData(data, this.props.clients.activeClient.is_business);

                    return <Tr key={i}

                      data={data} />
                   }
                )}
            </Table>

            {loans.length === 0 &&
                <p>No loans</p>
            }

      </div>
    )
	}
};
