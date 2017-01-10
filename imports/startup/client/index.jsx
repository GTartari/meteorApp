import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './routes.jsx';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

//imports para utilizar material-ui, es acá (en el primer render padre)
//que se provee del theme para renderizar los componentes de la librería

Meteor.startup( () => {
	
	ReactDOM.render(
		<MuiThemeProvider>
               <Routes />
        </MuiThemeProvider>
		,document.getElementById( 'react-root' )
	);
});