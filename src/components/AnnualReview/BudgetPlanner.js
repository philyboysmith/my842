import React from 'react';
import Reactable from 'reactable';

function BudgetPlanner({ data }) {

  const Table = Reactable.Table,
            Tr = Reactable.Tr,
            Td = Reactable.Td,
            Thead = Reactable.Thead,
            Th = Reactable.Th;

  return (
    <div>
      <h1>Budget planner</h1>
      {data &&
            data.map((group,i) =>
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
		        {group.categories &&
          			group.categories.map((category,i) =>
          				<Tr key={i}>
          					<Td column="title">{category.title}</Td>
          					<Td column="current_lifestyle">
          						<input className="input-transparent form-control" name="current_lifestyle" placeholder="50" />
          					</Td>
          					<Td column="survivors_lifestyle">
          						<input className="input-transparent form-control" name="survivors_lifestyle" placeholder="50" />
          					</Td>
          					<Td column="at_selected_retirement">
          						<input className="input-transparent form-control" name="at_selected_retirement" placeholder="50" />
          					</Td>
          					<Td column="post_age_75_80">
          						<input className="input-transparent form-control" name="post_age_75_80" placeholder="50" />
          					</Td>
          				</Tr>
	  				)
              	}
		      </Table>
      )}
               
    </div>
  );
}

export default BudgetPlanner;
