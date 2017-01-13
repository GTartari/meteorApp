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

require('rc-slider/assets/index.css');
var Slider = require('rc-slider');

const style = {
  margin: 12,
};

const style1 = {
    width: '50%',
    float: 'left',
}
const style2 = {
    width: '50%',
    float: 'right',
}
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

const marks = { 50: "50%", 40:"40%" , 30:"30%" , 20:"20%" , 10:"10%" , 0:<strong>0%</strong> , "-10":"-10%" , "-20":"-20%" , "-30":"30%" , "-40":"-40%" , "-50":"-50%" };

const CustomizedSlider = React.createClass({
  getInitialState() {
    return {
      valueP: 50,
      valueN: -50,
    };
  },
  onSliderChange(value) {
    this.props.onChangeVarA.bind(this);
    let vP = -value[0];
    let vN = value[0];
    this.setState({
      valueP:vP,
      valueN:vN,
    });
  },
  onSliderChange2(value) {
    this.props.onChangeVarA.bind(this);
    let vP = value[1];
    let vN = -value[1];
    this.setState({
      valueP:vP,
      valueN:vN,
    });
  },
  render() {
    return (
        <div>
        <div style={style1}>
      <Slider
        onChange={this.onSliderChange}
        min={-100} max={0} value={[this.state.valueN, 0]}
                             onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
                              range={true} allowCross={false} pushable={true}
      />
      </div>
      <div style={style1}>
      <Slider onChange={this.onSliderChange2} min={0} max={100} value={[0, this.state.valueP]} range={true} allowCross={false} pushable={true}/>
      </div>
      </div>
    );
  },
});

export default class Restricciones extends Component {  
	constructor(props) {
        super(props);

        this.state = {
            movPrecios: 0,
            posXProd: 0,
            varMaxA: 0,
            varMaxB: 0,
            varMaxC: 0,
            varMaxD: 0,
            varMaxE: 0,
            varMaxNC: 0,
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

    onChangeVarA(event) {
        let varMaxA = Number(event.target.value);
        console.log(varMaxA);
        this.setState({varMaxA});
    }

    onSubmit(event) {
        event.preventDefault();
        Meteor.call('inputConstrData.insert', { tolerancia: this.state.tolerancia, posA: this.state.posA, posB: this.state.posB, posC: this.state.posC, posD: this.state.posD, posE:this.state.posE, posT: this.state.posT }, function(error, result){
            if(error)
                console.log("call function returned error");
            else
                if(result==1)
                    console.log("input created");
                else
                    console.log("input updated");
        });
    }

    render() {
        return (
        	<div className="statistic-content">
	            <Paper style={stylePaper} zDepth={3}>
                    <div className="register-box-body">
                        { /*this.getSignUpResponseMessage() */}
                        <form onSubmit={ this.onSubmit.bind(this) }> {/*From -> onSubmit={ this.onSubmit.bind(this) }*/}
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
                            <CustomizedSlider data={ this.state.posA } changeHandler={this.onChangeVarA}/>
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max B (Canasta de Mercado)</p>
                            <div style={styleSlider}>
                            <br/>
                                <CustomizedSlider />
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max C (Fondo Surtido)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider />
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max D (MMPP)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider />
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max E (OPP)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider />
                            </div>
                            <br/>
                            <p style={styleLabel} >var_max NC (No Comparable)</p>
                            <div style={styleSlider}>
                            <br/>
                            <CustomizedSlider />
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

