import React from 'react';

function Availability({ data }) {
  let parsedData = data;
  if (data.length === 0) {
    parsedData = 'No Availability data';
  }
  return (
    <div>
      <h1>Availability</h1>
      <p>{parsedData}</p>
    </div>
  );
}

Availability.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default Availability;
