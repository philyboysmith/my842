import React from 'react';
import Reactable from 'reactable';

import {money, humanDate} from '../helpers';

export default class LifetimeGifts extends React.Component {


  render() {

      const {lifetime_gifts} =  this.props.clients.activeClient;

      const Table = Reactable.Table,
            Tr = Reactable.Tr;
      if (this.props.clients.activeClient.lifetime_gifts !== undefined ) {
        return (
              <div key="LifetimeGifts">
                    <h2>Lifetime Gifts</h2>
                    <Table className="table table-striped">
                        {lifetime_gifts &&
                          lifetime_gifts.map((gift,i) =>
                            /*  Reduce convacts to string  */
                          <Tr key={i} className="special-row"
                            data={{
                              'Donor': gift.contact_id,
                              'Description': gift.description,
                              'Date of Gift': humanDate(gift.date_of_gift),
                              'Type of Gift': gift.type_of_gift,
                              'Name and relationship of recipient': gift.recipient,
                              'Value': money(gift.value),
                              'Notes': gift.notes
                            }} />

                        )}
                    </Table>

              </div>
            )

      }
      return (<p>This member has no children and/or dependents.</p>);




  }
};
