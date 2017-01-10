import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes.jsx';

import {
  cyan500, indigo500,
  pinkA200,
  grey100, grey300, grey400, grey500,
  white, darkBlack, fullBlack,
} from '../../../node_modules/material-ui/styles/colors';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500,
  },
  appBar: {
    height: 50,
  },
});


Meteor.startup( () => {
	
	ReactDOM.render(
		<MuiThemeProvider muiTheme={muiTheme}>
               <Routes />
        </MuiThemeProvider>
		,document.getElementById( 'react-root' )
	);
});