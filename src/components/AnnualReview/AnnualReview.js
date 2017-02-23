import React from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import pure from 'recompose/pure';

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
    <Tabs>
      <TabList className="nav nav-tabs">
        <Tab key="Introduction"><span>Introduction</span></Tab>
        <Tab key="AssetsAndLiabilities"><span>Assets and Liability Statement</span></Tab>
        <Tab key="FamilyTree"><span>Family Tree</span></Tab>
        <Tab key="BudgetPlanner"><span>Budget Planner</span></Tab>
        <Tab key="RiskProfile"><span>Risk Profile</span></Tab>
        <Tab key="Availability"><span>Availability</span></Tab>
      </TabList>

      <TabPanel key="Introduction" className="tab-content">
        <h1>Welcome</h1>
        <p>The annual review process begins here. Once you've checked the following details we will be able to meet you and provide some expert advice.</p>
        <p>This annual review is due on: <span>{annualReviewData.due_date}</span></p>
        <p>Status: <span style={{ color: annualReviewData.status === 'complete' ? 'green' : 'red' }}>{annualReviewData.status}</span></p>
      </TabPanel>
      <TabPanel key="AssetsAndLiabilities" className="tab-content">
        <AssetsAndLiabilities data={annualReviewData.assets_and_liabilities} />
      </TabPanel>
      <TabPanel key="FamilyTree" className="tab-content">
        <FamilyTree data={annualReviewData.family_tree} />
      </TabPanel>
      <TabPanel key="BudgetPlanner" className="tab-content">
        <BudgetPlanner data={annualReviewData.budget_planner} />
      </TabPanel>
      <TabPanel key="RiskProfile" className="tab-content">
        <RiskProfile data={annualReviewData.risk_profile} />
      </TabPanel>
      <TabPanel key="Availability" className="tab-content">
        <Availability data={annualReviewData.availability} />
      </TabPanel>
    </Tabs>
  );
}

AnnualReview.propTypes = {
  annualReviewData: React.PropTypes.shape({
    assets_and_liabilities: React.PropTypes.object,
    availability: React.PropTypes.array,
    due_date: React.PropTypes.string,
    family_tree: React.PropTypes.object,
    risk_profile: React.PropTypes.array,
    status: React.PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    annualReviewData: state.annualReview.data,
  };
}

function mapDispatchToProps(dispatch) {
  return { dispatch };
}

export default pure(connect(mapStateToProps, mapDispatchToProps)(AnnualReview));
