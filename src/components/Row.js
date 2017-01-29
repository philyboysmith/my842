import React from 'react';

export default class Row extends React.Component {


	render() {

    const props = this.props;

		return (

      <div>

      {props &&
        Object.keys(props.data).map(function(key, i) {
          if(key.startsWith('__')) {
            if(props.business){
              return <div className="form-group" key={i}><label>{key.substring(2)}</label><div><div className="form-control  input-transparent">{props.data[key]}</div></div></div>;
            } else {
              return false
            }
          } else {
          return <div className="form-group" key={i}><label>{key}</label><div><div className="form-control  input-transparent">{props.data[key]}</div></div></div>;

          }
       })

      }
      </div>
      )
	}
};
