import React from 'react';

import AssetsAndLiabilities from './AssetsAndLiabilities';
import Availability from './Availability';
import BudgetPlanner from './BudgetPlanner';
import FamilyTree from './FamilyTree';
import RiskProfile from './RiskProfile';

function AnnualReview(props) {
  return (
    <div>
      <AssetsAndLiabilities />
      <FamilyTree />
      <BudgetPlanner />
      <RiskProfile />
      <Availability />
    </div>
  );
}

export default AnnualReview;
