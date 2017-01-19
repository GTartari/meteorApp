import React, { Component, PropTypes } from 'react';

// components
import CountCollector from './components/collectionCount';

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const style = {
  stylePaper: {
    width: '40%',
  	heigth: '50%',
    margin: '0 auto',
    textAlign: 'center',
  },
  styleDivPaper: {
  	paddingTop: 30,
  },
  styleDivButton: {
  	padding: 30,
  }
}

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
          <div style={style.styleDivPaper}>
    				<br />
    				<Paper style={style.stylePaper} zDepth={3}>
    					<AppBar
    						title="Model"
    						iconClassNameRight="muidocs-icon-navigation-expand-more"
    						showMenuIconButton={false}
    						/>
              <CountCollector />
            	<div style={style.styleDivButton}>
    	            <RaisedButton label="run script" primary={true} onClick={ this.runMethod }/>
              </div>
            </Paper>
          </div>
        );
    }
}
