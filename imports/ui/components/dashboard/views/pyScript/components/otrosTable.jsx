import React, { Component, PropTypes } from 'react';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

style = {
  width: '30%',
  float: 'right',
  margin: '10px',
};

export default class OtrosTable extends Component {

  constructor(props) {
      super(props);
  }

  render () {
    return (
      <Paper style={style}>
      <Table>
         <TableHeader
           displaySelectAll={false}
           adjustForCheckbox={false}
         >
           <TableRow>
             <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
               Opciones solver
             </TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody
           displayRowCheckbox={false}
         >
             <TableRow>
               <TableRowColumn>Solver</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.solver : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Log_file</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.log.toString() : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Round values</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.round.toString() : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Only SB</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.sb.toString() : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Links between products</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.links.toString() : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Precios CB prod promo/liq</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.precios.toString() : "-"}</TableRowColumn>
             </TableRow>
         </TableBody>
       </Table>
     </Paper>
    )
  }
}

OtrosTable.propTypes = {
  input: PropTypes.object,
};
