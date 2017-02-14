import React from 'react';

import CurrentAccountsList from './CurrentAccountsList';
import IncomeList from './IncomeList';
import LiquidAssetsList from './LiquidAssetsList';
import PensionsList from './PensionsList';
import PropertiesList from './PropertiesList';
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

function AssetsAndLiabilities({ data }) {
  return (
    <div>
      <h1>Assets and Liabilities Statement</h1>
      <PropertiesList data={data.properties} />
      <PensionsList data={data.pensions} />
      <IncomeList data={data.income} />
      <LiquidAssetsList data={data.liquid_assets} />
      <CurrentAccountsList data={data['current-accounts']} />
    </div>
  );
}

AssetsAndLiabilities.propTypes = {
  data: React.PropTypes.object,
};

      // {renderListItem(data.properties, 'Properties')}
      // {renderListItem(data.pensions, 'Pensions')}
      // {renderListItem(data.income, 'Income')}
      // {renderListItem(data.liquid_assets, 'Liquid Assets')}
      // {renderListItem(data['current-accounts'], 'Current Accounts')}

export default AssetsAndLiabilities;
