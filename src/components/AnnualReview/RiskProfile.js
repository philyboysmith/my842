import React from 'react';

function RiskProfile({ data }) {
  return (
    <div>
      <h1>Risk Profile</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default RiskProfile;
