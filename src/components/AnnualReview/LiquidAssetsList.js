import React from 'react';

import RequiredChanges from './RequiredChanges';

function LiquidAssetsList({ data }) {
  return (
    <div>
      <h2>Liquid Assets</h2>
      <ul className="al_list">
        {data.map(({ approved, description, notes, title, uid, value }) => (
          <li className="al_list__item" key={uid}>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Value: {value}</p>
            <p>Notes: {notes}</p>
            <RequiredChanges isApproved={approved} onApproved={() => {}} onRevision={() => {}} />
          </li>
          ))}
      </ul>
    </div>
  );
}

LiquidAssetsList.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default LiquidAssetsList;
