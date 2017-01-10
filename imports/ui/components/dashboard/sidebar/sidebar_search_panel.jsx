import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Search from 'material-ui/svg-icons/action/search';
import IconButton from 'material-ui/IconButton';

export default class SideBarSearchPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form action="#" method="get" className="sidebar-form">
                <div>
                    <TextField type="text" name="q" className="form-control" placeholder="Search..." style = {{width: '75%'}}/>
                    <IconButton tooltip="Buscar" type="submit" name="search" id="search-btn" className="btn btn-flat">
                      <Search />
                    </IconButton>
                </div>
            </form>
        )
    }
}