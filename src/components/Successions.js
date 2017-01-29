import React from 'react';
import Reactable from 'reactable';

import {whoIsThis, humanDate, tick, money} from '../helpers';

import Row from './Row';

export default class Successions extends React.Component {


	render() {

      const {successions} =  this.props.clients.activeClient;
      const {business} =  this.props.clients.activeClient;
      const Table = Reactable.Table,
            Tr = Reactable.Tr;

		return (
			<div key="Successions">
            {business &&
                  <Row data={{
                    'Value of business': money(business.company_value),
                    'Date of valuation': humanDate(business.valuation_date),
                    'Professional valuation  ': tick(business.professional_valuation),
                    'Whose valuation': business.whose_valuation,
                    'Share/partnership agreement in force': tick(business.partnership_agreement),
                    'Type': business.agreement_type,
                    'Is agreement supported by protection plans': tick(business.agreement_supported),
                    'Are you restricted by the company’s Articles of Association/Partnership Agreement in respect of selling your company share(s)/partnership value': tick(business.selling_restricted),
                    'Does any person hold an option to buy a share(s) in the business or are you planning to bring in other partners': tick(business.option_to_buy),
                    'Notes': business.notes
                  }} />
            }

            {successions &&
              <div>
                    <Table className="table table-striped">
                        {successions &&
                          successions.map((succession,i) =>
                            /*  Reduce convacts to string  */
                          <Tr key={i} className="special-row"
                            data={{
                              'Principal\'s Name': whoIsThis(succession.contact_id, this.props.clients.activeClient.contacts),
                              'Will made': tick(succession.will_made),
                              'Date made': humanDate(succession.will_date),
                              'Last updated': humanDate(succession.will_date_updated),
                              'Does the will specifically refer to the business shares/partnership value': tick(succession.mention_shares),
                              'What will happen in the event of death/disability before retirement': succession.what_will_happen,
                              'Details of plans made to pass on the business or the business shares/partnership value on retirement': succession.notes

                          }} />
                        )}
                    </Table>
              </div>
            }
			</div>
		)
	}
};
