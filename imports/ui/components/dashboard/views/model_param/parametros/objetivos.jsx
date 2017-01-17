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
import Snackbar from 'material-ui/Snackbar';

const style = {
  margin: 12,
};

const stylePaper = {
  width: '70%',
  margin: '0 auto',
  textAlign: 'center',
};

export default class Objetivos extends Component {
	constructor(props) {
        super(props);

        this.state = {
            tolerancia: 0,
            posA: 0,
            posB: 0,
            posC: 0,
            posD: 0,
            posE: 0,
            posT: 0,
            open: false,
        };
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    };

    handleRequestClose() {
        this.setState({
          open: false,
        });
    };

    onChangeTol(event) {
        let tolerancia = Number(event.target.value);
        this.setState({tolerancia});
    }
    onChangePosA(event) {
        let posA = Number(event.target.value);
        this.setState({posA});
    }
    onChangePosB(event) {
        let posB = Number(event.target.value);
        this.setState({posB});
    }
    onChangePosC(event) {
        let posC = Number(event.target.value);
        this.setState({posC});
    }
    onChangePosD(event) {
        let posD = Number(event.target.value);
        this.setState({posD});
    }
    onChangePosE(event) {
        let posE = Number(event.target.value);
        this.setState({posE});
    }
    onChangePosT(event) {
        let posT = Number(event.target.value);
        this.setState({posT});
    }

    onObjSubmit(event) {
        event.preventDefault();
        Meteor.call('inputObjData.insert', { tolerancia: this.state.tolerancia, posA: this.state.posA, posB: this.state.posB, posC: this.state.posC, posD: this.state.posD, posE:this.state.posE, posT: this.state.posT }, function(error, result){
            if(error)
                console.log("call function returned error");
            else{
                if(result == 1)
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
                        <form onSubmit={ this.onObjSubmit.bind(this) }> {/*From -> onSubmit={ this.onSubmit.bind(this) }*/}
                            <Subheader>Parametros</Subheader>
                            {/*textfield -> onChange={this.onChangeEmail.bind(this)} value={this.state.email}*/}
                            <TextField type="number" ref="toleranciaInput" onChange={ this.onChangeTol.bind(this) } value={ this.state.tolerancia } hintText="Valor" floatingLabelText="Tolerancia no posicionables" />
                            <br/>
                            <Divider />
                            <Subheader>Posicionamiento</Subheader>
                            <TextField type="number" ref="posA" hintText="Valor" onChange={ this.onChangePosA.bind(this) } value={ this.state.posA } floatingLabelText="pos A (Top Venta)" />
                            <br/>
                            <TextField type="number" ref="posB" hintText="Valor" onChange={ this.onChangePosB.bind(this) } value={ this.state.posB } floatingLabelText="pos B (Canasta de Mercado)" />
                            <br/>
                            <TextField type="number" ref="posC" hintText="Valor" onChange={ this.onChangePosC.bind(this) } value={ this.state.posC } floatingLabelText="pos C (Fondo Surtido)" />
                            <br/>
                            <TextField type="number" ref="posD" hintText="Valor" onChange={ this.onChangePosD.bind(this) } value={ this.state.posD } floatingLabelText="pos D (MMPP)" />
                            <br/>
                            <TextField type="number" ref="posE" hintText="Valor" onChange={ this.onChangePosE.bind(this) } value={ this.state.posE } floatingLabelText="pos E (OPP)" />
                            <br/>
                            <TextField type="number" ref="posT" hintText="Valor" onChange={ this.onChangePosT.bind(this) } value={ this.state.posT } floatingLabelText="pos Total Categoría" />
                            <br/>
                            <RaisedButton label="submit" primary={true} style={style} type="submit" onTouchTap={this.handleTouchTap.bind(this)} />
                        </form>
                    </div>
                </Paper>
                <Snackbar
                  open={this.state.open}
                  message="Input updated"
                  autoHideDuration={4000}
                  onRequestClose={this.handleRequestClose.bind(this)}
                />
            </div>
        );
    }
}
