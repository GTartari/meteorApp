import React, { Component } from 'react';

export default class SideBarUserPanel extends Component {
    constructor(props) {
        super(props);
    }
    userAvatarURL(){
        //función para retornar el url del avatar del usuario
        return "/img/avatar.png"
    }
    render() {
        const displayName = this.props.userName;
        
        return (
            <div className="user-panel">
                <div className="pull-left image">
                    <img src={this.userAvatarURL()} className="img-circle" alt="User Image"/>
                </div>
                <div className="pull-left info">
                    <p>{ displayName }</p>
                    <a href="#"><i className="fa fa-circle text-success"/> Online</a>
                </div>
            </div>
        )
    }
}