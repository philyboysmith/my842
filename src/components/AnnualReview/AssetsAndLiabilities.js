import React from 'react';

import CurrentAccountsList from './AssetsAndLiabilities/CurrentAccountsList';
import IncomeList from './AssetsAndLiabilities/IncomeList';
import LiquidAssetsList from './AssetsAndLiabilities/LiquidAssetsList';
import PensionsList from './AssetsAndLiabilities/PensionsList';
import PropertiesList from './AssetsAndLiabilities/PropertiesList';

function AssetsAndLiabilities({ clientId, data, postAnnualReview }) {
  return (
    <div>
      <h1>Assets and Liabilities Statement</h1>
      <PropertiesList
        clientId={clientId} data={data.properties} postAnnualReview={postAnnualReview}
      />
      <PensionsList clientId={clientId} data={data.pensions} postAnnualReview={postAnnualReview} />
      <IncomeList clientId={clientId} data={data.income} postAnnualReview={postAnnualReview} />
      <LiquidAssetsList
        clientId={clientId} data={data.liquid_assets} postAnnualReview={postAnnualReview}
      />
      <CurrentAccountsList
        clientId={clientId} data={data.current_accounts} postAnnualReview={postAnnualReview}
      />
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
  clientId: React.PropTypes.string.isRequired,
};

export default AssetsAndLiabilities;
