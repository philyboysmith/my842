import React from 'react';

import CurrentAccountsList from './AssetsAndLiabilities/CurrentAccountsList';
import IncomeList from './AssetsAndLiabilities/IncomeList';
import LiquidAssetsList from './AssetsAndLiabilities/LiquidAssetsList';
import PensionsList from './AssetsAndLiabilities/PensionsList';
import PropertiesList from './AssetsAndLiabilities/PropertiesList';

function AssetsAndLiabilities({ data, postAnnualReview }) {
  return (
    <div>
      <h1>Assets and Liabilities Statement</h1>
      <PropertiesList postAnnualReview={postAnnualReview} data={data.properties} />
      <PensionsList data={data.pensions} />
      <IncomeList data={data.income} />
      <LiquidAssetsList data={data.liquid_assets} />
      <CurrentAccountsList data={data.current_accounts} />
    </div>
  );
}

AssetsAndLiabilities.propTypes = {
  data: React.PropTypes.shape({
    properties: React.PropTypes.array,
    pensions: React.PropTypes.array,
    income: React.PropTypes.object,
    liquid_assets: React.PropTypes.array,
    current_accounts: React.PropTypes.array,
  }).isRequired,
  postAnnualReview: React.PropTypes.func.isRequired,
};

export default AssetsAndLiabilities;
