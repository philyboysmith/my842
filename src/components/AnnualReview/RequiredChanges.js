import React from 'react';

function RequiredChanges({ onApproved, onRevision }) {
  return (
    <div>
      <div className="al_list__input hidden">
        <textarea
          rows="5"
          className="input-transparent form-control"
          placeholder="Please detail what changes need to be made"
        />
      </div>
      <div className="al_list__actions" >
        <button style={{ color: 'green' }} onClick={onApproved} className="glyphicon glyphicon-ok"> Approved</button>
        <button style={{ color: 'red' }} onClick={onRevision} className="glyphicon glyphicon-remove"> Requires revision</button>
      </div>
    </div>
  );
}

RequiredChanges.propTypes = {
  onApproved: React.PropTypes.func.isRequired,
  onRevision: React.PropTypes.func.isRequired,
};

export default RequiredChanges;
