import React from 'react';

import RequiredChanges from './RequiredChanges';

function renderListItem(item, title) {
  let rendered = [];
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
  if (true) {

  }
  return (
    <div>
      <h2>{title}</h2>
      <ul className="al_list">
        <li className="al_list__item">
          {rendered}
          <RequiredChanges />
        </li>
      </ul>
    </div>
  );
}

function AssetsAndLiabilities({ data }) {
  return (
    <div>
      <h1>Assets and Liabilities Statement</h1>
      {renderListItem(data.properties, 'Properties')}
      {renderListItem(data.pensions, 'Pensions')}
      {renderListItem(data.income, 'Income')}
      {renderListItem(data.liquid_assets, 'Liquid Assets')}
      {renderListItem(data['current-accounts'], 'Current Accounts')}
    </div>
  );
}

AssetsAndLiabilities.propTypes = {
  data: React.PropTypes.object,
};

export default AssetsAndLiabilities;
