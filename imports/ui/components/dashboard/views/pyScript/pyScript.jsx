import React, { Component, PropTypes } from 'react';

// components

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class PyScript extends Component {
	constructor(props) {
        super(props);
    }

    runMethod(index) {
        Meteor.call('runCode', function (err, response) {
          console.log(response);
        });
    }

    render() {
        return (
        	<div className="statistic-content">
	            <RaisedButton label="run script" primary={true} style={style} onClick={ this.runMethod }/>
            </div>
        );
    }
}

