import React from 'react';

import RequiredChanges from './RequiredChanges';

function PropertiesList({ data }) {
  return (
    <div>
      <h2>Properties</h2>
      <RequiredChanges onApproved={() => false} onRevision={() => false} />
    </div>
  );
}

export default PropertiesList;
