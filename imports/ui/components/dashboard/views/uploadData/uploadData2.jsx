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

export default class UploadDataView extends Component {
	constructor(props) {
        super(props);

        this.state = {
          uploading: true,
        }
    }

    uploadState() {
      if(!this.state.uploading) {
        var val = (
          <p><i className="fa fa-spin fa-refresh"></i>Uploading files...</p>
        );
      } else {
        var val = (
          <p></p>
        );
      }
      return val;
    }

    uploadStateToggle() {
      if(this.state.uploading)
        this.setState({uploading:false});
      else {
        this.setState({uploading:true});
      }
    }

		uploadFile(event) {
			let files = event.target.files;
			let file = files[0];
			let name = files[0].name;

      this.uploadStateToggle.bind(this);
      console.log(this.state.uploading);

      Papa.parse( event.target.files[0],{
        header: true,
        complete( result, file ) {
          Meteor.call('parseUpload', result.data, (error, rensonse) => {
            if(error) {
							Bert.alert( 'Error!', 'danger', 'growl-top-right');
              console.log(error.reason);
            } else {
              Bert.alert( 'Upload complete!', 'success', 'growl-top-right');
            }
          });
        }
      });

    Meteor.call('dataInfo.insert', this.state, function( error, result) {
      if(error){
        console.log("call function returned error");
      }
    });
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
              {this.props.submitted}
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
