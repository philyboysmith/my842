import React from 'react';

import RequiredChanges from './RequiredChanges';

function LiquidAssetsList({ data }) {
  return (
    <div>
      <h2>Liquid Assets</h2>
      <RequiredChanges onApproved={() => false} onRevision={() => false} />
    </div>
  );
}

export default LiquidAssetsList;
