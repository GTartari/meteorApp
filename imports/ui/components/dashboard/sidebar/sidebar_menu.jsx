import React, { Component } from 'react';
import { Link } from 'react-router';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import Divider from 'material-ui/Divider';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import Upload from 'material-ui/svg-icons/file/file-upload';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Graph from 'material-ui/svg-icons/device/graphic-eq.js';
import UserI from 'material-ui/svg-icons/action/verified-user';
import Paper from 'material-ui/Paper';

styleMenu = {
  width: "90%",
};

export default class SideBarMenu extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const userCount = this.props.userCount;
        return (
          <div style={styleMenu}>
          <Menu>
            <MenuItem primaryText="Main Navigation" />
            <MenuItem primaryText="Dashboard" leftIcon={<Dashboard />} />
            <Divider />
            <MenuItem primaryText="UploadData" leftIcon={<Upload />} containerElement={ <Link to="/updata" />} />
            <MenuItem primaryText="Parametros" leftIcon={<ContentCopy />} containerElement={ <Link to="/modelparam" />} />
            <MenuItem primaryText="Stats" leftIcon={<Graph />} containerElement={ <Link to="/stats" />} />
            <MenuItem primaryText="pyScript" leftIcon={<Graph />} containerElement={ <Link to="/script" />} />
            <Divider />
            <MenuItem primaryText="Users" leftIcon={<UserI />} />
          </Menu>
          </div>
        );
    }
}
