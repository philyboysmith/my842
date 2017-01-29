import React from 'react';
import Reactable from 'reactable';
import moment from 'moment';
import {tick, transformContacts} from '../helpers';

export default class Children extends React.Component {


	render() {

      const {children} =  this.props.clients.activeClient;

      const Table = Reactable.Table,
            Tr = Reactable.Tr;
      if (children !== undefined ) {
        return (
              <div key="Children">
                    <Table className="table table-striped">
                        {children &&
                          children.map((child,i) => {
                            return <Tr key={i} className="special-row"
                            data={{
                              'Name': child.name,
                              'Age': moment().diff(child.dob, 'years'),
                               'Gender': child.gender,
                               'Financially dependent': tick(child.financially_dependent),
                               'Relationship': child.relationship,
                               'Related party(ies)': transformContacts(child.contacts),
                               'Notes': child.notes }} />

                          }

                        )}
                    </Table>

              </div>
            )

      }
      return (<p>This member has no children and/or dependents.</p>);




	}
};
