import React, { Component, PropTypes } from 'react';
// import { Drawer, AppBar, MenuItem} from 'material-ui'
// This is faster & creates smaller builds:
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import Divider from 'material-ui/Divider';

import SideBarUserPanel from './sidebar_user_panel';
import SideBarSearchPanel from './sidebar_search_panel.jsx';
import SideBarMenu from './sidebar_menu';

export default class Header extends Component {

  constructor(props){
    super(props);
    this.state = {open:false};
  }

  userDisplayName() {
      const currentUser = this.props.user;

      if (currentUser) {
          return currentUser.username;
      } else {
          return '---';
      }
  };

  handleToggle() {
    this.setState({open: !this.state.open});
   }
  handleClose() { this.setState({open: false}); }
  render() {

      return (
            <div>
              <div>
                <SideBarUserPanel userName={ this.userDisplayName() } user={ this.props.user }/>
              </div>
              <br />
              <br />
              <Divider />
              <SideBarMenu />
              <Divider />
            </div>
      );
  }
}
