import React from 'react';

import RequiredChanges from './RequiredChanges';

function renderListItem(item, title) {
  const rendered = [];
  if (!Array.isArray(item)) {
    if (Object.keys(item).length === 0) {

    } else {
      rendered.push(
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>Notes: {item.notes}</p>
          <p>Value:<strong>£{item.value}</strong></p>
        </div>,
      );
    }
  }
  return (
    <div>
      <h2>{title}</h2>
      <ul className="al_list">
        <li className="al_list__item">
          {rendered}
          <RequiredChanges onApproved={() => false} onRevision={() => false} />
        </li>
      </ul>
    </div>
  );
}

function IncomeList({ data }) {
  return (
    <div>
      <h2>Income</h2>
      <RequiredChanges onApproved={() => false} onRevision={() => false} />
    </div>
  );
}

export default IncomeList;
