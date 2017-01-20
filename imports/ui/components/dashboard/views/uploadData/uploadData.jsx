import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'

// components
import ContentHeader from '../content_header.jsx';
import UploadState from './components/uploadState'

// packages
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';


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

var UploadLoader = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      uploadState: Session.get("uploading")
    };
  },
  render() {
    // Show a loading indicator if data is not ready
    if (this.data.uploadState) {
      return (
        <div>
          <h1>Uploading...</h1>
          <CircularProgress />
        </div>
      );
    } else {
      // Render a component and pass down the loaded data
      return (
        <p>Last upload: {this.props.submitted}</p>
      );
    }
  }
});

class UploadDataView extends Component {
	constructor(props) {
        super(props);
    }

  uploadFile(event) {
  	let files = event.target.files;
  	let file = files[0];
  	let name = files[0].name;

    Session.set("uploading", true);
    Papa.parse( event.target.files[0],{
      header: true,
      complete( result, file ) {
        Meteor.call('parseUpload', result.data, (error, rensonse) => {
          if(error) {
            Session.set("uploading", false);
  					Bert.alert( 'Error! '+error.reason, 'danger', 'growl-top-right');
          } else {
            Session.set("uploading", false);
            Bert.alert( 'Upload complete!', 'success', 'growl-top-right');
          }
        });
      }
    });

    Meteor.call('dataInfo.insert');
  }

  renderDataInfo() {
    let info = this.props.dataInfo;
    let submitted = info[0] ? info[0].submitted.toLocaleTimeString() : null;
      return(
        <div>
          <UploadLoader submitted={submitted} />
        </div>
      );
  }

  render() {
    return (
    	<div style={style.styleDivPaper}>
				<br />
				<Paper style={style.stylePaper} zDepth={3}>
					<AppBar
						title="Upload File"
						iconClassNameRight="muidocs-icon-navigation-expand-more"
						showMenuIconButton={false}
						/>
          {this.renderDataInfo()}
					<input type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }}
						onChange={this.uploadFile.bind(this)} />
          <div style={style.styleDivButton}>
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
