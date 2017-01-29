import React from 'react';
import Reactable from 'reactable';

import {money} from '../helpers';

export default class Expenditures extends React.Component {



	render() {

      const {activeClient} =  this.props.clients;

      const Table = Reactable.Table,
            Td = Reactable.Td,
            Tr = Reactable.Tr;
      if (activeClient !== undefined ) {
        return (
              <div key="Expenditures">
                <h4>Linked Expenses</h4>

                <Table data={[
                  {'Description':'Loans and Mortgages Expenses', 'Amount': money(activeClient.a) + ' per annum'},
                  {'Description':'Protection Expenses', 'Amount': money(activeClient.protection_expenditure) + ' per annum'},
                  {'Description':'Retirement Expenses', 'Amount': money(activeClient.retirement_expenditure) + ' per annum'},
                  {'Description':'Savings and Investment Expenses', 'Amount': money(activeClient.investment_expenditure) + ' per annum'},
                  {'Description':'Total', 'Amount': money(activeClient.linked_expenditure_total) + ' per annum'}
                  ]}
                 />


                <h4>Regular Expenses</h4>

                <Table className="table table-striped">
                        {activeClient.ongoing_expenditure &&
                          activeClient.ongoing_expenditure.map((expenditure,i) =>
                            /*  Reduce convacts to string  */
                          <Tr key={i} className="special-row"
                            data={{
                              'Category':expenditure.category,
                              'Amount':money(expenditure.amount) + ' per annum',
                              'Notes':expenditure.notes
                            }} />
                        )}
                            <Tr key="total">
                              <Td column="Category">Total</Td>
                              <Td column="Amount">{money(activeClient.ongoing_expenditure_total)}</Td>
                            </Tr>

                    </Table>

                <h4>Summary</h4>

                <table className="table table-striped">
                <tbody>
                        <tr><td>Linked expenses total</td><td>{money(activeClient.linked_expenditure_total)}</td></tr>
                        <tr><td>Regular expenses total</td><td>{money(activeClient.ongoing_expenditure_total)}</td></tr>
                        <tr><td>Total net income</td><td>{money(activeClient.total_income)}</td></tr>
                        <tr><td>Net disposable income</td><td>{money(activeClient.total_income - activeClient.ongoing_expenditure_total - activeClient.linked_expenditure_total)}</td></tr>
                    </tbody>
                    </table>

                 <h4>Capital Expenses</h4>

                 <Table className="table table-striped">
                        {activeClient.capital_expenditure &&
                          activeClient.capital_expenditure.map((expenditure,i) =>
                            /*  Reduce convacts to string  */
                          <Tr key={i} className="special-row"
                            data={{
                              'Category':expenditure.category,
                              'Amount':money(expenditure.amount),
                              'Notes':expenditure.notes
                            }} />
                        )}
                    </Table>

              </div>
            )

      }
      return (<p>This member has no expenditures.</p>);




	}
};
