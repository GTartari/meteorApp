import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// components
import CountCollector from './components/collectionCount';
import ConstrTable from './components/constrTable';
import ObjTable from './components/objTable';
import OtrosTable from './components/otrosTable';

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const style = {
  paper: {
    textAlign: 'center',
    marginRight: '10px',
  },
  styleDivPaper: {
  	paddingTop: 30,
    width: '100%',
  },
  styleDivButton: {
  	padding: 10,
  },
  right: {
    textAlign: 'center',
    float: 'right',
    marginLeft: '10px',
    width: '15%',
  },
  left: {
    float: 'left',
    width: '80%',
  }
}

class PyScript extends Component {
	constructor(props) {
    super(props);
  }

  runMethod(index) {
    Meteor.call('runCode', function (err, response) {
      console.log(response);
    });
  }

  renderTables() {
    var obj = this.props.objInput ? this.props.objInput[0] : this.props.objInput;
    var constr = this.props.constrInput ? this.props.constrInput[0] : this.props.constrInput;
    var otros = this.props.otrosInput ? this.props.otrosInput[0] : this.props.otrosInput;
    return (
      <div>
        <ObjTable input={obj} />
        <ConstrTable input={constr} />
        <OtrosTable input={otros} />
      </div>
    );
  }

  render() {
    return (
      <div style={style.styleDivPaper}>
        <div style={style.left}>
        {this.renderTables()}
        </div>
        <div style={style.right}>
				<Paper style={style.paper} zDepth={3}>
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
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('inputConstrInfo');
  Meteor.subscribe('inputObjInfo');
  Meteor.subscribe('inputOtrosInfo');

  return {
    constrInput: InputConstrData.find().fetch(),
    objInput: InputObjData.find().fetch(),
    otrosInput: InputData.find().fetch(),
  };
}, PyScript);
