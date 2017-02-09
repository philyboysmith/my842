import React from 'react';

function FamilyTree({ data }) {
  console.log(data);
  return (
    

    <div className="family-tree">
      <h1>Family tree</h1>
      <ul className="clearfix">
        {data.parents.map((parent, i) =>
          <li key={i} className={'client ' + (parent.parents.length > 0 ? 'with-parents' : '')}>
            {parent.name}
            <ul className="grandparents">
              {parent.parents.map((grandparent, j) =>
                <li key={j}>
                  {grandparent.name}
                </li>,
                )}
            </ul>
            <ul className="siblings">
              {parent.siblings.map((sibling, j) =>
                <li key={j}>
                  {sibling.name}
                </li>,
                )}
            </ul>
          </li>,
        )}
      </ul>
    </div>
  );
}

FamilyTree.propTypes = {
  data: React.PropTypes.object.isRequired,
};

export default FamilyTree;
