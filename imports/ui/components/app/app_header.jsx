import React, { Component, PropTypes } from 'react';

import AppHeaderNotificationMenu from './header_menus/app_header_notification_menu.jsx'
import AppHeaderUserMenu from './header_menus/app_header_user_menu.jsx';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <header className="main-header">

                <a href="#" className="logo">
                    <span className="logo-mini"><b>S</b>P</span>
                    <span className="logo-lg"><b>Smart</b>Pricing</span>
                </a>

                <nav className="navbar navbar-static-top">
                    <a href="#" className="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span className="sr-only">Toggle navigation</span>
                    </a>

                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">

                            <AppHeaderNotificationMenu />
                            <AppHeaderUserMenu user={ this.props.user } />

                        </ul>
                    </div>
                </nav>

            </header>
        );
    }
}