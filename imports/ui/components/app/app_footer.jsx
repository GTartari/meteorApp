import React, { Component, PropTypes } from 'react';

export default class AppFooter extends Component {

    render() {
		return (
			<footer className="main-footer">
				<div className="pull-right hidden-xs">
					<b>Version</b> alpha 0.5
				</div>
				<strong>Copyright &copy; <a href="">Walmart Chile</a>.</strong> All rights reserved.
			</footer>
        );
  	}
}