import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideBarMenu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const userCount = this.props.userCount;

        return (
            <ul className="sidebar-menu">
                <li className="header">MAIN NAVIGATION</li>

                <li className="active treeview">
                    <a href="#">
                        <i className="fa fa-dashboard"/> <span>Dashboard</span> <i className="fa fa-angle-left pull-right"/>
                    </a>
                    <ul className="treeview-menu">
                        <li className="active"><Link to={ '/updata' }><i className="fa fa-circle-o"/>UploadData</Link></li>
                        <li className="active"><Link to={ '/modelparam' }><i className="fa fa-circle-o"/>Parametros Modelo</Link></li>
                        <li className="active"><Link to={ '/stats' }><i className="fa fa-circle-o"/>Stats</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to = {'#'} >
                        <i className = "fa fa-users" /> <span> Users </span>
                        <small className = "label pull-right bg-blue" > { userCount } </small>
                    </Link>
                </li>
            </ul>
        );
    }
}