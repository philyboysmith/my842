import React from 'react';

import RequiredChanges from './RequiredChanges';

function PensionsList({ data }) {
  return (
    <div>
      <h2>Pensions</h2>
      {data.map(({ approved, description, notes, title, uid, value }) => (
        <div key={uid}>
          <p>Title: {title}</p>
          <p>Description: {description}</p>
          <p>Value: {value}</p>
          <p>Notes: {notes}</p>
          <RequiredChanges isApproved={approved} onApproved={() => {}} onRevision={() => {}} />
        </div>
      ))}
    </div>
  );
}

PensionsList.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default PensionsList;
