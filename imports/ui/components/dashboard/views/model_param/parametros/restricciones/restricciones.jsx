import React, { Component, PropTypes } from 'react';

// components

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

import CustomizedSlider from './customizedSlider';

const style = {
  margin: 12,
};

const styleSlider = {
  width: '90%',
  margin: '0 auto',
  marginTop: '30 auto',
  marginBottom: '30 auto',
  textAlign: 'left',
};

const styleLabel = {
  paddingLeft: 30,
  paddingTop: 30,
  textAlign: 'left',
};

const stylePaper = {
  width: '70%',
  margin: '0 auto',
  textAlign: 'center',
};

export default class Restricciones extends Component {
	constructor(props) {
        super(props);

        this.state = {
            movPrecios: 0,
            posXProd: 0,
            varMaxA: 25,
            varMaxB: 25,
            varMaxC: 25,
            varMaxD: 25,
            varMaxE: 25,
            varMaxNC: 25,
        };
    }

    onChangePrecios(event) {
        let movPrecios = Number(event.target.value);
        this.setState({movPrecios});
    }

    onChangePos(event) {
        let posXProd = Number(event.target.value);
        this.setState({posXProd});
    }

    onChangeVarA(val) {
        this.setState({varMaxA: val});
    }

    onChangeVarB(val) {
        this.setState({varMaxB: val});
    }

    onChangeVarC(val) {
        this.setState({varMaxC: val});
    }

    onChangeVarD(val) {
        this.setState({varMaxD: val});
    }

    onChangeVarE(val) {
        this.setState({varMaxE: val});
    }

    onChangeVarNC(val) {
        this.setState({varMaxNC: val});
    }

    onConstrSubmit(event) {
        event.preventDefault();
        Meteor.call('inputConstrData.insert', this.state, function(error, result){
            if(error){
              console.log(error);
              console.log("call function returned error");
            }
            else{
              if(result==1)
                Bert.alert( 'Input created!', 'success', 'growl-top-right');
              else
                Bert.alert( 'Input updated!', 'success', 'growl-top-right');
            }
        });
    }

    render() {
        return (
        	<div className="statistic-content">
	            <Paper style={stylePaper} zDepth={3}>
                    <div className="register-box-body">
                        { /*this.getSignUpResponseMessage() */}
                        <form onSubmit={ this.onConstrSubmit.bind(this) }> {/*From -> onSubmit={ this.onSubmit.bind(this) }*/}
                            <Subheader>Parametros</Subheader>
                            {/*textfield -> onChange={this.onChangeEmail.bind(this)} value={this.state.email}*/}
                            <TextField type="number" hintText="Valor" onChange={ this.onChangePrecios.bind(this) } value={ this.state.movPrecios } floatingLabelText="N° máx. de movimientos de precio" />
                            <br/>
                            <TextField type="number" hintText="Valor" onChange={ this.onChangePos.bind(this) } value={ this.state.posXProd } floatingLabelText="Máx. posicionamiento por producto" />
                            <br />
                            <Divider />
                            <Subheader>Variación máxima de precios</Subheader>
                            <p style={styleLabel} >var_max A (Top Venta)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider data={ this.state.posA } changeHandler={this.onChangeVarA.bind(this)}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max B (Canasta de Mercado)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider changeHandler={this.onChangeVarB.bind(this)}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max C (Fondo Surtido)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider changeHandler={this.onChangeVarC.bind(this)}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max D (MMPP)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider changeHandler={this.onChangeVarD.bind(this)}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max E (OPP)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider changeHandler={this.onChangeVarE.bind(this)}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max NC (No Comparable)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider changeHandler={this.onChangeVarNC.bind(this)}/>
                            </div>
                            <br/>
                            <RaisedButton label="submit" primary={true} style={style} type="submit" />
                        </form>
                    </div>
                </Paper>
            </div>

        );
    }
}
