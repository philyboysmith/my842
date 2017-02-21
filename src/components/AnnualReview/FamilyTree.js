import React from 'react';

function FamilyTree({ data }) {
  return (
    

    <div id="family-tree-wrapper">
      <h1>Family tree</h1>
      <div className="family-tree" id="family-tree">
        <ul className="clearfix clients">
          {data.parents.map((parent, i) =>
            <li key={i} className={'client ' + (parent.parents.length > 0 ? 'with-parents' : '')}>
              <span className="person">{parent.name}</span>
              <ul className="parents">
                {parent.parents.map((grandparent, j) =>
                  <li key={j}>
                    <span className="person">{parent.name}</span>
                  </li>,
                  )}
              </ul>
              <ul className="siblings">
                {parent.siblings.map((sibling, j) =>
                  <li key={j}>
                    <span className="person">{parent.name}</span>
                  </li>,
                  )}
              </ul>
            </li>,
          )}
        </ul>
        <ul className="clearfix children generations-1">
          {data.children.map((parent, i) =>
            <li key={i} className={'client ' + (parent.children.length > 0 ? 'with-child' : '')}>
              <span className="person">{parent.name}</span>
              
            </li>,
          )}
        </ul>
      </div>

    </div>
  );
}

FamilyTree.propTypes = {
  data: React.PropTypes.shape({
    children: React.PropTypes.array,
    parents: React.PropTypes.array,
  }).isRequired,
};

export default FamilyTree;
