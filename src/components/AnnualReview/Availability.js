import React from 'react';

function Availability({ data }) {
  return (
    <div>
      <h1>Availability</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default Availability;
