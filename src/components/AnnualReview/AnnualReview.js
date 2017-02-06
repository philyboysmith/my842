import React from 'react';
import { connect } from 'react-redux';

import AssetsAndLiabilities from './AssetsAndLiabilities';
import Availability from './Availability';
import BudgetPlanner from './BudgetPlanner';
import FamilyTree from './FamilyTree';
import RiskProfile from './RiskProfile';

function AnnualReview({ annualReviewData }) {
  if (!annualReviewData) {
    return null;
  }
  return (
    <div>
      <AssetsAndLiabilities data={annualReviewData.assets_and_liabilities} />
      <FamilyTree data={annualReviewData.family_tree} />
      <BudgetPlanner data={annualReviewData.budget_planner} />
      <RiskProfile data={annualReviewData.risk_profile} />
      <Availability data={annualReviewData.availability} />
    </div>
  );
}

AnnualReview.propTypes = {
  annualReviewData: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    annualReviewData: state.annualReview.data,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnualReview);
