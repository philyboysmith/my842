import React from 'react';

import CurrentAccountsList from './CurrentAccountsList';
import IncomeList from './IncomeList';
import LiquidAssetsList from './LiquidAssetsList';
import PensionsList from './PensionsList';
import PropertiesList from './PropertiesList';
import RequiredChanges from './RequiredChanges';

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
