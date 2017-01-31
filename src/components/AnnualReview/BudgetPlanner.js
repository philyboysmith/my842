import React from 'react';

function BudgetPlanner({ data }) {
  return (
    <div>
      <h1>Budget planner</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default BudgetPlanner;
