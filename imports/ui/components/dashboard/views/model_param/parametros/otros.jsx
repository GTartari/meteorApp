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
    marginBottom: 16,
    width: '10%',
    position: 'relative',
    left: '45%',
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
          value: 1,
        };
    }


  handleChange(event, index, value) {
    this.setState({value})
};

    render() {
        return (
        	<div className="statistic-content">
	            <Paper style={stylePaper} zDepth={3}>
                    <div className="register-box-body">
                        { /*this.getSignUpResponseMessage() */}
                        <form> {/*From -> onSubmit={ this.onSubmit.bind(this) }*/}
                            {/*textfield -> onChange={this.onChangeEmail.bind(this)} value={this.state.email}*/}
                            <SelectField
                              floatingLabelText="Solver"
                              value={this.state.value}
                              onChange={this.handleChange.bind(this)}
                            >
                              <MenuItem value={1} primaryText="CPLEX" />
                            </SelectField>
                            <br/>
                            <br/>
                            <Checkbox
                              label="Log_file"
                              style={styles.checkbox}
                              labelPosition="left"
                            />
                            <br />
                            <Checkbox
                              label="Round values"
                              style={styles.checkbox}
                              labelPosition="left"
                            />
                            <br/>
                            <Checkbox
                              label="Only SB"
                              style={styles.checkbox}
                              labelPosition="left"
                            />
                            <br/>
                            <Checkbox
                              label="Links between products"
                              style={styles.checkbox}
                              labelPosition="left"
                            />
                            <br/>
                            <Checkbox
                              label="precios CB prod promo/liq"
                              style={styles.checkbox}
                              labelPosition="left"
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

