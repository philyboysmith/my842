import React from 'react';

function FamilyTree({ data }) {
  let parsedData = data;
  if (data.length === 0) {
    parsedData = 'No Family Tree data';
  }
  return (
    <div>
      <h1>Family Tree</h1>
      <p>{parsedData}</p>
    </div>
  );
}

FamilyTree.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default FamilyTree;
