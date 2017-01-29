import React from 'react';
import Reactable from 'reactable';

export default class Advisers extends React.Component {


	render() {

    const {advisers} =  this.props.clients.activeClient;

    const Table = Reactable.Table,
          Tr = Reactable.Tr,
          unsafe = Reactable.unsafe;

		return (
			<div key="Advisers">
            <Table className="table table-striped">
                {advisers.map((adviser,i) =>
                    /*  Reduce convacts to string  */
                  <Tr key={i} className="special-row"
                    data={{
                      'Type': adviser.type,
                      'Company': adviser.company,
                      'Name': adviser.name,
                      'Address':unsafe(adviser.address),
                      'Email': adviser.email,
                      'Work phone':adviser.work_phone,
                      'Notes': adviser.notes
                       }} />
                )}
            </Table>
			</div>
		)
	}
};
