import React from 'react';
import { Table, Tr } from 'reactable';

import { humanDate } from '../helpers';

export default class Meetings extends React.Component {

  render() {
    const { meetings } = this.props.clients.activeClient;

    return (
      <div key="Meetings">
        <Table className="table">
          {meetings &&
                  meetings.map((meeting, i) =>
                    <Tr
                      key={i} className="special-row"
                      data={{ Date: humanDate(meeting.date), Time: meeting.time, Location: meeting.location, Type: meeting.type, 'Individuals present': meeting.individuals_present, Notes: meeting.notes }}
                    />,
                )}
        </Table>
      </div>
    );
  }
}

