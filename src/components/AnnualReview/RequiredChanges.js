import React from 'react';

function RequiredChanges(props) {
  return (
    <div>
      <div className="al_list__input hidden">
        <textarea
          rows="5" className="input-transparent form-control"
          placeholder="Please detail what changes need to be made"
        />
      </div>
      <div className="al_list__actions">
        <div>
          <i className="glyphicon glyphicon-ok" /> Approved
        </div>
        <div>
          <i className="glyphicon glyphicon-remove" /> Requires revision
        </div>
      </div>
    </div>
  );
}

RequiredChanges.propTypes = {};

export default RequiredChanges;
