import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

export default class TableRender extends Component {
  constructor(props) {
    super(props);
  }

  renderLinks() {
    let links = this.props.searchData;
    return links.map((link) => {
      return(
        <TableRow key={link._id}>
          <TableRowColumn>{link.prdNbrMP}</TableRowColumn>
          <TableRowColumn>{link.prdNbrLnk}</TableRowColumn>
          <TableRowColumn>{link.posN}</TableRowColumn>
          <TableRowColumn>{link.posP}</TableRowColumn>
        </TableRow>
      );
    });
  }

  render () {
    return (
      <Table>
         <TableHeader
           displaySelectAll={false}
           adjustForCheckbox={false}
         >
           <TableRow>
             <TableHeaderColumn colSpan="4" tooltip="Super Header" style={{textAlign: 'center'}}>
               Resultado busqueda
             </TableHeaderColumn>
           </TableRow>
           <TableRow>
             <TableHeaderColumn>Número de producto</TableHeaderColumn>
             <TableHeaderColumn>Número de link</TableHeaderColumn>
             <TableHeaderColumn>Posición normal</TableHeaderColumn>
             <TableHeaderColumn>Posición promoción</TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody
           displayRowCheckbox={false}
         >
          {this.renderLinks()}
         </TableBody>
       </Table>
    );
  }
}
