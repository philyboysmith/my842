import React from 'react';

function FamilyTree({ data }) {
  let parsedData = data;
  if (Object.keys(data).length === 0) {
    parsedData = 'No Family Tree data';
  }
  return (
    <div>
      <h1>Family Tree</h1>
      <p>{JSON.stringify(parsedData)}</p>
    </div>
  );
}

FamilyTree.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default FamilyTree;
