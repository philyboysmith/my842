import React from 'react';

import RequiredChanges from './RequiredChanges';

function PropertiesList({ data }) {
  return (
    <div>
      <h2>Properties</h2>
      <ul className="al_list">
      {data.map(({ approved, description, notes, title, uid, value }) => (
          <li className="al_list__item" key={uid}>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{value}</p>
            </div>
            <RequiredChanges isApproved={approved} onApproved={() => {}} onRevision={() => {}} />
          </li>
      ))}
      </ul>
    </div>
  );
}

PropertiesList.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default PropertiesList;
