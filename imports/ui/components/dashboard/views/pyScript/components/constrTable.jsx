import React, { Component, PropTypes } from 'react';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';

style = {
  width: '30%',
  margin: '0 auto',
};

export default class ConstrTable extends Component {

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
               Parametros
             </TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody
           displayRowCheckbox={false}
         >
             <TableRow>
               <TableRowColumn style={{width: '90%'}}>N° máx. de movimientos de precio</TableRowColumn>
               <TableRowColumn style={{width: '10%'}}>{this.props.input ? this.props.input.movPrecios : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>Máx. posicionamiento por producto</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.posXProd : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max A (Top Venta)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxA : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max B (Canasta de Mercado)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxB : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max C (Fondo Surtido)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxC : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max D (MMPP)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxD : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max E (OPP)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxE : "-"}</TableRowColumn>
             </TableRow>
             <TableRow>
               <TableRowColumn>var_max NC (No Comparable)</TableRowColumn>
               <TableRowColumn>{this.props.input ? this.props.input.varMaxNC : "-"}</TableRowColumn>
             </TableRow>
         </TableBody>
       </Table>
     </Paper>
    )
  }
}

ConstrTable.propTypes = {
  input: PropTypes.object,
};
