import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Session } from 'meteor/session'

const style = {
  padding: 30,
}

class CollectionCount extends Component {
	constructor(props) {
        super(props);
  }

  renderCount () {
    Session.setDefault("count", "loading...");
    Meteor.call('fileCount', function (error,result) {
      if(error)
          console.log("call function returned error "+error);
      else {
        Session.set("count", result);
      }
    });
  }

  render() {
    this.renderCount();
    return (
      <div style={style}>Data count: {this.props.countVal}</div>
    );
  }
}

export default createContainer (() => {
  return {
    countVal: Session.get("count")
  };
}, CollectionCount);
