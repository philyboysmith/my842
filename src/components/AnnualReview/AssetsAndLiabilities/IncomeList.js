import React from 'react';

import RequiredChanges from './RequiredChanges';

function IncomeList({ clientId, data, postAnnualReview }) {
  const { approved, name, notes, value } = data;

  console.log(clientId);
  console.log(data);
  return (
    <div>
      <h2>Income</h2>
      <ul className="al_list">
        <li className="al_list__item">
          <div>
            <h3>{name}</h3>
            <p>{value}</p>
            { notes ? <p>{notes}</p> : '' }
          </div>
          <RequiredChanges
            isApproved={approved}
            onApproved={() => postAnnualReview(clientId, JSON.stringify({ approved: true }))}
            onRevision={notesText =>
              postAnnualReview(clientId, JSON.stringify({ notes: notesText }))}
          />
        </li>
      </ul>
    </div>
  );
}

IncomeList.propTypes = {
  data: React.PropTypes.shape({
    approved: React.PropTypes.bool,
    name: React.PropTypes.string,
    notes: React.PropTypes.string,
    value: React.PropTypes.string,
  }).isRequired,
  postAnnualReview: React.PropTypes.func.isRequired,
  clientId: React.PropTypes.string.isRequired,
};

export default IncomeList;
