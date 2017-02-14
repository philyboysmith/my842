import React from 'react';

import RequiredChanges from './RequiredChanges';

function IncomeList({ data }) {
  const { approved, name, notes, value } = data;
  return (
    <div>
      <h2>Income</h2>
      <ul className="al_list">
        <li className="al_list__item">
          <h4>{name}</h4>
          <p>Notes: {notes}</p>
          <p>Value: £{value}</p>
          <RequiredChanges isApproved={approved} onApproved={() => {}} onRevision={() => {}} />
        </li>
      </ul>
    </div>
  );
}

IncomeList.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default IncomeList;
