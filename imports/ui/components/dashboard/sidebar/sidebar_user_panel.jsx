import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import IconButton from 'material-ui/IconButton';
import LogOut from 'material-ui/svg-icons/navigation/cancel';

export default class SideBarUserPanel extends Component {
    constructor(props) {
        super(props);
    }
    userAvatarURL(){
        //función para retornar el url del avatar del usuario
        return "/img/avatar.png"
    }
    logout() {
        Meteor.logout(function() {
            browserHistory.push('/');   
        });     
    }
    render() {
        const displayName = this.props.userName;
        
        return (
            <List>
                <ListItem
                  disabled={true}
                  leftAvatar={<Avatar>A</Avatar>}
                >
                  { displayName }
                  <IconButton tooltip="log-out" onClick={ this.logout }>
                  <LogOut />
                </IconButton>
                </ListItem>
            </List>
        )
    }
}