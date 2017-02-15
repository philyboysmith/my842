import React from 'react';

function RequiredChanges({ onApproved, onRevision, isApproved }) {
  if (isApproved) {
    return (
      <div>
        <p>Your revisions for this item have been submitted and approved. Thank you.</p>
      </div>
    );
  }
  return (
    <section>
      <div className="al_list__input hidden">
        <textarea
          rows="5"
          className="input-transparent form-control"
          placeholder="Please detail what changes need to be made"
        />
      </div>
      <div className="al_list__actions" >
        <div><button style={{ color: 'green' }} onClick={onApproved} className="glyphicon glyphicon-ok"> Approved</button></div>
        <div><button style={{ color: 'red' }} onClick={onRevision} className="glyphicon glyphicon-remove"> Requires revision</button></div>
      </div>
    </section>
  );
}

RequiredChanges.propTypes = {
  onApproved: React.PropTypes.func.isRequired,
  onRevision: React.PropTypes.func.isRequired,
  isApproved: React.PropTypes.bool,
};

RequiredChanges.defaultProps = {
  isApproved: false,
};

export default RequiredChanges;
