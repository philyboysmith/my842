import React from 'react';
import { Table, Tr, Td, Thead, Th } from 'reactable';

function BudgetPlanner({ data }) {
  return (
    <div>
      <h1>Budget planner</h1>
      {data.map((group, i) =>
        <Table className="table" key={i}>
          <Thead>
            <Th column="title" width="400">
              <strong className="name-header">{group.group}</strong>
            </Th>
            <Th column="current_lifestyle">Current lifestyle</Th>
            <Th column="survivors_lifestyle">Survivor's lifestyle</Th>
            <Th column="at_selected_retirement">At selected retirement</Th>
            <Th column="post_age_75_80">Post Age 75 / 80</Th>

          </Thead>
          {group.categories.map((category, j) =>
            <Tr key={j}>
              <Td column="title">{category.title}</Td>
              <Td column="current_lifestyle">
                <input className="input-transparent form-control" name="current_lifestyle" placeholder="Click to edit" />
              </Td>
              <Td column="survivors_lifestyle">
                <input className="input-transparent form-control" name="survivors_lifestyle" placeholder="Click to edit" />
              </Td>
              <Td column="at_selected_retirement">
                <input className="input-transparent form-control" name="at_selected_retirement" placeholder="Click to edit" />
              </Td>
              <Td column="post_age_75_80">
                <input className="input-transparent form-control" name="post_age_75_80" placeholder="Click to edit" />
              </Td>
            </Tr>,
          )}
        </Table>,
      )}
    </div>
  );
}

BudgetPlanner.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    categories: React.PropTypes.arrayOf(React.PropTypes.shape({
      approved: React.PropTypes.bool,
      at_selected_retirement: React.PropTypes.string,
      current_lifestyle: React.PropTypes.string,
      notes: React.PropTypes.string,
      post_age_75_80: React.PropTypes.string,
      survivors_lifestyle: React.PropTypes.string,
      title: React.PropTypes.string,
      uid: React.PropTypes.string,
    })),
    group: React.PropTypes.string,
  })).isRequired,
};

export default BudgetPlanner;
