import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class ASearch extends Component {
  constructor(props) {
    super(props);
  }

  renderLinks() {
    let links = this.props.searchData;
    return links.map((link) => {
      return(
        <TableRow key={link._id}>
          <TableRowColumn>{link.prdNbrBase}</TableRowColumn>
          <TableRowColumn>{link.prdNbrLnk}</TableRowColumn>
          <TableRowColumn>{link.fact}</TableRowColumn>
        </TableRow>
      );
    });
  }

  render () {
    return (
      <Table height="300px">
         <TableHeader
           displaySelectAll={false}
           adjustForCheckbox={false}
         >
           <TableRow>
             <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
               Resultado busqueda
             </TableHeaderColumn>
           </TableRow>
           <TableRow>
             <TableHeaderColumn>Número de producto</TableHeaderColumn>
             <TableHeaderColumn>Número de link</TableHeaderColumn>
             <TableHeaderColumn>Factor</TableHeaderColumn>
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

export default createContainer(({ pNumber }) => {
  Meteor.subscribe('aSearchFact');

  return {
    searchData: LFact.find().fetch(),
  };
}, ASearch);
