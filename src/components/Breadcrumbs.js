import React from 'react';

import { Link } from 'react-router';

function Breadcrumbs({ clients, title }) {
  return (
    <div key="Breadcrumb" className="row">
      <ol className="breadcrumb">
        <li><Link to={'/'}>Home</Link></li>
        {clients.activeClient &&
          <li>
            <Link to={`/clients/${clients.activeClient.id}`}>{clients.activeClient.name}</Link>
          </li>
        }
        <li>{title}</li>
      </ol>
    </div>
  );
}

Breadcrumbs.propTypes = {
  clients: React.PropTypes.shape({
    activeClient: React.PropTypes.object,
    data: React.PropTypes.array,
    isFetching: React.PropTypes.bool,
    isLoaded: React.PropTypes.bool,
  }).isRequired,
  title: React.PropTypes.string.isRequired,
};

export default Breadcrumbs;
