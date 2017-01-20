import React, { Component, PropTypes } from 'react';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

style = {
  width: '30%',
  float: 'left',
  margin: '10px',
};

export default class ObjTable extends Component {

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
               Posicionamiento
             </TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody
           displayRowCheckbox={false}
         >
             <TableRow>
               <TableRowColumn style={{width: '80%'}}>Toleracia no posicionables</TableRowColumn>
               <TableRowColumn style={{width: '20%'}}>{this.props.input ? this.props.input.tolerancia : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos A (Top Venta)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posA : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos B (Canasta de Mercado)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posB : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos C (Fondo Surtido)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posC : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos D (MMPP)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posD : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos E (OPP)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posE : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>pos Total Categoría</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posT : "-"}</TableRowColumn>
             </TableRow>
         </TableBody>
       </Table>
     </Paper>
    )
  }
}

ObjTable.propTypes = {
  input: PropTypes.object,
};
