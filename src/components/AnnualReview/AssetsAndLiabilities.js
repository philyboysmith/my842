import React from 'react';

import RequiredChanges from './RequiredChanges';

function renderListItem(item, title) {
  return (
    <div>
      <h2>{title}</h2>
      <ul className="al_list">
        <li className="al_list__item">
          <div>
            <h3>17 The Meadway</h3>
            <p>Main residence (UK)</p>
            <p><strong>£1,000,000</strong></p>
          </div>
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
