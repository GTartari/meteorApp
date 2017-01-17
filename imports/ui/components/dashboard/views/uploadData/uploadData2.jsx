import React, { Component, PropTypes } from 'react';

// components
import ContentHeader from '../content_header.jsx';


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
              console.log(error.reason);
            } else {
              Bert.alert( 'Upload complete!', 'success', 'growl-top-right');
            }
          });
        }
      });
		}

    render() {
        return (
        	<div className="statistic-content">
	            <ContentHeader name="Statistics" description="statistics" breadcrumb="Statistics" breadcrumbIcon="fa fa-dashboard"/>

	            <section className="content"><span>UploadData</span></section>

						<input type="file" name="uploadCSV" onChange={this.uploadFile.bind(this)}/>
            {this.uploadState.bind(this)}
          </div>
        );
    }
}
