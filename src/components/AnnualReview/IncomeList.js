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
