import React from 'react';

import RequiredChanges from './RequiredChanges';

function LiquidAssetsList({ clientId, data, postAnnualReview }) {
  return (
    <div>
      <h2>Liquid Assets</h2>
      <ul className="al_list">
        {data.map(({ approved, description, notes, title, uid, value }) => (
          <li className="al_list__item" key={uid}>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{value}</p>
              { notes ? <p>{notes}</p> : '' }
            </div>
            <RequiredChanges
              isApproved={approved}
              onApproved={() => postAnnualReview(clientId, JSON.stringify({ uid, approved: true }))}
              onRevision={notesText =>
                postAnnualReview(clientId, JSON.stringify({ uid, notes: notesText }))}
            />
          </li>
          ))}
      </ul>
    </div>
  );
}

LiquidAssetsList.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    approved: React.PropTypes.bool,
    description: React.PropTypes.string,
    notes: React.PropTypes.string,
    title: React.PropTypes.string,
    uid: React.PropTypes.string,
    value: React.PropTypes.number,
  })).isRequired,
  postAnnualReview: React.PropTypes.func.isRequired,
  clientId: React.PropTypes.string.isRequired,
};

export default LiquidAssetsList;
