import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import PSearch from './pSearch';
import LSearch from './lSearch';
import ASearch from './aSearch';

const stylePaper = {
  width: '70%',
  margin: '0 auto',
  textAlign: 'center',
};

export default class LDif extends Component {
	constructor(props) {
        super(props);

        this.state = {
          prdNbrBase: 0,
          prdNbrLnk: 0,
          varPrecio: 0,
          pSearch: 'none',
          PSearchNumber: 0,
          LSearchBase: 0,
          LSearchLink: 0,
          lSearch: 'none',
          aSearch: 'none',
          table: '',
          replace: false,
        };
  }

  onChangeNbrBase(event) {
      let prdNbrBase = Number(event.target.value);
      this.setState({prdNbrBase});
  }

  onChangeNbrLink(event) {
      let prdNbrLnk = Number(event.target.value);
      this.setState({prdNbrLnk});
  }

  onChangeVarPrecio(event) {
      let varPrecio = Number(event.target.value);
      this.setState({varPrecio});
  }

  onChangePrdSearch(event) {
      let PSearchNumber = Number(event.target.value);
      this.setState({PSearchNumber});
  }

  onChangeBaseSearch(event) {
    let LSearchBase = Number(event.target.value);
    this.setState({LSearchBase});
  }

  onChangeLinkSearch(event) {
    let LSearchLink = Number(event.target.value);
    this.setState({LSearchLink});
  }

  onDifSubmit(event) {
      event.preventDefault();
      Meteor.call('difLink.insert', { prdNbrBase: this.state.prdNbrBase, prdNbrLnk: this.state.prdNbrLnk, varPrecio: this.state.varPrecio} , function(error, result){
          if(error)
              console.log("call function returned error: " + error);
          else{
              if(result == 1)
                Bert.alert( 'Link added!', 'success', 'growl-top-right');
              else
                if(result == 3)
                  Bert.alert( 'Product numbers must be different!', 'error', 'growl-top-right');
                else{
                  Bert.alert( 'Link already exist!', 'info', 'growl-top-right');
                  this.setState({bindedState: 'si'});
                }
          }
      }.bind(this));
  }

  prdSearch() {
      this.setState({ table: 'prod'});
  }

  linkSearch() {
      this.setState({ table: 'link'});
  }

  aSearch() {
      this.setState({ table: 'todo'});
  }

  showTable() {
    if(this.state.table=="link")
      return <LSearch pNumber={{base:this.state.LSearchBase, link:this.state.LSearchLink}} />;
    else
      if(this.state.table=="prod")
        return <PSearch pNumber={{prodNumber:this.state.PSearchNumber}} />;
      else
        if(this.state.table=="todo")
          return <ASearch elimLink={this.eliminar} />;
        else
          return <div></div>;
  }

  eliminar(id) {
    Meteor.call('difLink.eliminar', id);
  }

  handleSelectChange(event, index, value) {
    if(value==0){
      this.setState({lSearch: 'none', pSearch: 'none', aSearch: 'none'});
    } else {
      if(value==1){
        this.setState({lSearch: 'none', pSearch: 'block', aSearch: 'none'});
      } else if(value==2) {
        this.setState({lSearch: 'block', pSearch: 'none', aSearch: 'none'});
      } else {
        this.setState({lSearch: 'none', pSearch: 'none', aSearch: 'block'});
      }
    }
  }

  render () {
    return (
      <Paper style={stylePaper} zDepth={3}>
        {this.state.bindedState}
        <div className="register-box-body">
            <form onSubmit={ this.onDifSubmit.bind(this) }>
                <Subheader>Diferencia precio</Subheader>
                <TextField
                  type="number" onChange={ this.onChangeNbrBase.bind(this) }
                  value={ this.state.prdNbrBase } hintText="Valor"
                  floatingLabelText="Product number base"
                  style={{width:140, margin:20}} />
                <TextField type="number" hintText="Valor"
                  onChange={ this.onChangeNbrLink.bind(this) }
                  value={ this.state.prdNbrLnk } floatingLabelText="Product number Link"
                  style={{width:140, margin:20}} />
                <TextField type="number" hintText="Valor"
                  onChange={ this.onChangeVarPrecio.bind(this) }
                  value={ this.state.varPrecio } floatingLabelText="Diferencia precio"
                   style={{width:140, margin:20}} />
                 <RaisedButton label="Agregar Link" primary={true} type="submit" />
            </form>
        </div>
        <Divider />
        <div>
          <SelectField
            floatingLabelText="Buscar por"
            onChange={this.handleSelectChange.bind(this)}
          >
          <MenuItem value={0} primaryText="-" />
          <MenuItem value={1} primaryText="Product Number" />
          <MenuItem value={2} primaryText="Link" />
          <MenuItem value={3} primaryText="Todos" />
        </SelectField>
        </div>
        <div style={{display:this.state.pSearch}}>
          <Subheader>Buscar por Product Number</Subheader>
          <TextField type="number" hintText="Valor"
            onChange={ this.onChangePrdSearch.bind(this) }
            value={ this.state.PSearchNumber } floatingLabelText="Product Number"
             style={{width:140, margin:20}} />
           <RaisedButton label="Buscar Producto" primary={true} type="submit" onClick={this.prdSearch.bind(this)} />
        </div>
        <div style={{display:this.state.lSearch}}>
          <Subheader>Buscar por Link</Subheader>
          <TextField type="number" hintText="Valor"
            onChange={ this.onChangeBaseSearch.bind(this) }
            value={ this.state.LSearchBase } floatingLabelText="Product Number"
            style={{width:140, margin:20}} />
          <TextField type="number" hintText="Valor"
            onChange={ this.onChangeLinkSearch.bind(this) }
            value={ this.state.LSearchLink } floatingLabelText="Product Number"
            style={{width:140, margin:20}} />
          <RaisedButton label="Buscar Producto" primary={true} onClick={this.linkSearch.bind(this)} />
        </div>
        <div style={{display:this.state.aSearch}}>
          <Subheader>Buscar todo</Subheader>
          <RaisedButton label="Buscar Todo" primary={true} onClick={this.aSearch.bind(this)} style={{marginBottom:20}}/>
        </div>
        <div>
          {this.showTable()}
        </div>
      </Paper>
    );
  }
}
