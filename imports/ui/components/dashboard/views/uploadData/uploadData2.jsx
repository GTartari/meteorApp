import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// components
import ContentHeader from '../content_header.jsx';
import DataInfoPost from './components/dataInfo.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const stylePaper = {
  width: '40%',
	heigth: '50%',
  margin: '0 auto',
  textAlign: 'center',
};

const styleDivPaper = {
	paddingTop: 30,
}

const styleDivButton = {
	padding: 30,
}

class UploadDataView extends Component {
	constructor(props) {
        super(props);
    }

uploadFile(event) {
	let files = event.target.files;
	let file = files[0];
	let name = files[0].name;

  Papa.parse( event.target.files[0],{
    header: true,
    complete( result, file ) {
      Meteor.call('parseUpload', result.data, (error, rensonse) => {
        if(error) {
					Bert.alert( 'Error! '+error.reason, 'danger', 'growl-top-right');
        } else {
          Bert.alert( 'Upload complete!', 'success', 'growl-top-right');
        }
      });
    }
  });

  Meteor.call('dataInfo.insert', function( error, result) {
    if(error) {
      Bert.alert( 'Error! '+error.reason, 'danger', 'growl-top-right');
    } else {
      Bert.alert( 'Upload complete!', 'success', 'growl-top-right');
    }
  });
}

  renderDataInfo() {
    let info = this.props.dataInfo;
    return (
        <p>Last update: {info[0] ? info[0].submitted.toLocaleTimeString() : null}</p>
      );
  }

    render() {
        return (
        	<div style={styleDivPaper}>
						<br />
						<Paper style={stylePaper} zDepth={3}>
							<AppBar
								title="Upload File"
								iconClassNameRight="muidocs-icon-navigation-expand-more"
								showMenuIconButton={false}
								/>
              {this.renderDataInfo()}
							<input type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }}
								onChange={this.uploadFile.bind(this)} />
							<div style={styleDivButton}>
								<RaisedButton
									label="Select file" primary={true} type="button"
									onClick={(e) => this.myInput.click() }
									>
								</RaisedButton>
							</div>
						</Paper>
          </div>
        );
    }
}

export default createContainer(() => {
  const handle = Meteor.subscribe('dataInfo.subm');

  return {
    dataInfo: DataInfo.find().fetch(),
  };
}, UploadDataView);
