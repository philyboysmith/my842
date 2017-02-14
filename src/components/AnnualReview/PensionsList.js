import React from 'react';

import RequiredChanges from './RequiredChanges';

function PensionsList({ data }) {
  return (
    <div>
      <h2>Pensions</h2>
      <RequiredChanges onApproved={() => false} onRevision={() => false} />
    </div>
  );
}

export default PensionsList;
