import React from 'react';

import RequiredChanges from './RequiredChanges';

function CurrentAccountsList({ data }) {
  return (
    <div>
      <h2>Current Accounts</h2>
      <RequiredChanges onApproved={() => false} onRevision={() => false} />
    </div>
  );
}

export default CurrentAccountsList;
