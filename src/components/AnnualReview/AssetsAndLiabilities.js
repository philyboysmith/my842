import React from 'react';

import CurrentAccountsList from './AssetsAndLiabilities/CurrentAccountsList';
import IncomeList from './AssetsAndLiabilities/IncomeList';
import LiquidAssetsList from './AssetsAndLiabilities/LiquidAssetsList';
import PensionsList from './AssetsAndLiabilities/PensionsList';
import PropertiesList from './AssetsAndLiabilities/PropertiesList';

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

export default AssetsAndLiabilities;
