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
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  button: {
    margin: 12,
  },
  checkbox: {
    width: '40%',
    margin: '0 auto',
    padding: 20,
  },
  selectBar: {
    padding: 20,
  },
};

const stylePaper = {
  width: '70%',
  margin: '0 auto',
  textAlign: 'center',
};

export default class Otros extends Component {
	constructor(props) {
        super(props);
        this.state = {
          solver: "CPLEX",
          log: false,
          round: false,
          sb: false,
          links: false,
          precios: false,
        };
    }

    onChangeSelect(event) {
        this.setState({solver: event.target.value});
    }

    onChangeLog(event) {
        (this.state.log ? this.setState({log: false}) : this.setState({log:true}));
    }

    onChangeRound(event) {
        (this.state.round ? this.setState({round: false}) : this.setState({round:true}));
    }

    onChangeSb(event) {
        (this.state.sb ? this.setState({sb: false}) : this.setState({sb:true}));
    }

    onChangeLinks(event) {
        (this.state.links ? this.setState({links: false}) : this.setState({links:true}));
    }

    onChangePrecios(event) {
        (this.state.precios ? this.setState({precios: false}) : this.setState({precios:true}));
    }

    onSubmit(event) {
        event.preventDefault();
        Meteor.call('inputOtrosData.insert', this.state , function(error, result){
            if(error)
                console.log("call function returned error");
            else
              if(result==1)
                Bert.alert( 'Input created!', 'success', 'growl-top-right');
              else
                Bert.alert( 'Input updated!', 'success', 'growl-top-right');
        });
    }

    render() {
        return (
        	<div className="statistic-content">
	            <Paper style={stylePaper} zDepth={3}>
                    <div className="register-box-body">
                        <form onSubmit={ this.onSubmit.bind(this) }>
                            <SelectField
                              style={styles.selectBar}
                              floatingLabelText="Solver"
                              value={this.state.solver}
                              onChange={this.onChangeSelect.bind(this)}
                            >
                              <MenuItem value={"CPLEX"} primaryText="CPLEX" />
                            </SelectField>
                            <br/>
                            <br/>
                            <Checkbox
                              label="Log_file"
                              style={styles.checkbox}
                              labelPosition="left"
                              checked={this.state.log ? true : false}
                              onCheck={this.onChangeLog.bind(this)}
                            />
                            <br />
                            <Checkbox
                              label="Round values"
                              style={styles.checkbox}
                              labelPosition="left"
                              checked={this.state.round ? true : false}
                              onCheck={this.onChangeRound.bind(this)}
                            />
                            <br/>
                            <Checkbox
                              label="Only SB"
                              style={styles.checkbox}
                              labelPosition="left"
                              checked={this.state.sb ? true : false}
                              onCheck={this.onChangeSb.bind(this)}
                            />
                            <br/>
                            <Checkbox
                              label="Links between products"
                              style={styles.checkbox}
                              labelPosition="left"
                              checked={this.state.links ? true : false}
                              onCheck={this.onChangeLinks.bind(this)}
                            />
                            <br/>
                            <Checkbox
                              label="precios CB prod promo/liq"
                              style={styles.checkbox}
                              labelPosition="left"
                              checked={this.state.precios ? true : false}
                              onCheck={this.onChangePrecios.bind(this)}
                            />
                            <br/>
                            <RaisedButton label="submit" primary={true} style={styles.button} type="submit" />
                        </form>
                    </div>
                </Paper>
            </div>

        );
    }
}
