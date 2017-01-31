import React from 'react';

import AssetsAndLiabilities from './AssetsAndLiabilities';
import Availability from './Availability';
import BudgetPlanner from './BudgetPlanner';
import FamilyTree from './FamilyTree';
import RiskProfile from './RiskProfile';

function AnnualReview({ annualReviewResponse }) {
  return (
    <div>
      <AssetsAndLiabilities data={annualReviewResponse.assets_and_liabilities} />
      <FamilyTree data={annualReviewResponse.family_tree} />
      <BudgetPlanner data={annualReviewResponse.budget_planner} />
      <RiskProfile data={annualReviewResponse.risk_profile} />
      <Availability data={annualReviewResponse.availability} />
    </div>
  );
}

AnnualReview.propTypes = {
  annualReviewResponse: React.PropTypes.object,
};

export default AnnualReview;
