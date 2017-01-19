import React, { Component, PropTypes } from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import CircularProgress from 'material-ui/CircularProgress';

export default class UploadState extends Component {
  constructor(props) {
        super(props);
  }
  render() {
    if(this.props.uploadState) {
      return(
        <div>
          <h1>Loading...</h1>
          <CircularProgress />
        </div>
      );
    } else {
      return (
        <p>Last update: 1</p>
      );
    }
  }
}

UploadState.propTypes = {
  uploadState: React.PropTypes.bool,
}
