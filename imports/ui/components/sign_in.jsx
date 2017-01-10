import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import CallOutMessage from './warnings/callout_message.jsx';


import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const stylePaper = {
  width: '40%',
  margin: '0 auto',
  textAlign: 'center',
};

const style = {
  margin: 12,
};

export default class SignIn extends Component {
	constructor(props) {
        super(props);

        this.state = {
        	email: '',
        	password: '',
        	hasError: false
        }
    }

    onChangeEmail(event) {
    	let email = event.target.value;
    	this.setState({email});
    }

    onChangePassword(event) {
    	let password = event.target.value;
    	this.setState({password});
    }

	onSubmit(event) {
        event.preventDefault();

		Meteor.loginWithPassword({ email: this.state.email }, this.state.password, function(error) {
			if (error) {
				this.setState({ hasError: true });
			}
		}.bind(this));
	}

	getLoginResponseMessage() {
		if (this.state.hasError) {
			return <CallOutMessage description='Forbidden' />
		}
	};

    render() {

        return (
        	<div>
	        	<AppBar
			        title="PriceApp"
			        iconClassNameRight="muidocs-icon-navigation-expand-more"
			      />
			    <br />
				 <Paper style={stylePaper} zDepth={3}>
					 <AppBar
				        title="Smart Pricing"
				        iconClassNameRight="muidocs-icon-navigation-expand-more"
				        showMenuIconButton={false}
				      />
					<div className="login-box-body">
						<p className="login-box-msg">Sign in to start your session</p>
						{ this.getLoginResponseMessage() }

						<form onSubmit={this.onSubmit.bind(this)}>
							<div className="form-group has-feedback">
								<TextField type="email" className="form-control" placeholder="Email" onChange={this.onChangeEmail.bind(this)} value={this.state.email}/>
								<span className="glyphicon glyphicon-envelope form-control-feedback" />
							</div>
							
							<div className="form-group has-feedback">
								<TextField type="password" className="form-control" placeholder="Password"  onChange={this.onChangePassword.bind(this)} value={this.state.password}/>
								<span className="glyphicon glyphicon-lock form-control-feedback" />
							</div>

							<div className="row">
								<div className="pull-right col-xs-4">
									<RaisedButton label="sign-in" primary={true} style={style} type="submit" />
								</div>
							</div>
						</form>
						<FlatButton label="I forgot my password" primary={true} style={style} href="#" />
						<FlatButton label="Register" primary={true} style={style} href='/sign-up' />
					</div>
				</Paper>
			</div>
        );
    }
}