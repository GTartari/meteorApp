import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const stylePaper = {
  width: '40%',
  margin: '0 auto',
  textAlign: 'center',
};

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const style = {
  margin: 12,
};

const Home = () => (
  <div>
    <AppBar
        title="PriceApp"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    <br />
    <Paper style={stylePaper} zDepth={3}>
    <AppBar
        title="log-in"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
      />
    	<br />
      <RaisedButton label="sign-in" primary={true} style={style} href={ '/sign-in' } />
      <RaisedButton label="sign-up" primary={true} style={style} href={ '/sign-up' } />
    </Paper>
  </div>
);

export default Home;