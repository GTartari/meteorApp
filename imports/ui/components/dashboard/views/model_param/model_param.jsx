import React, { Component, PropTypes } from 'react';

// components
import Objetivos from './parametros/objetivos.jsx';
import Restricciones from './parametros/restricciones.jsx';
import Otros from './parametros/otros.jsx';

import {Tabs, Tab} from 'material-ui/Tabs';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class ModelParamView extends Component {
	  constructor(props) {
        super(props);
        this.state = {
          slideIndex: 0,
          open: false,
        };
      }

      handleChange(value) {
        this.setState({slideIndex: value});
      };

      handleOpen() {
        this.setState({open: true});
      };

      handleClose() {
        this.setState({open: false});
      };

    render() {
        const actions = [
          <FlatButton
            label="Ok"
            primary={true}
            onTouchTap={this.handleClose.bind(this)}
          />,
        ];
        return (
            <div>
                <br/>
                <Tabs
                  onChange={this.handleChange.bind(this)}
                  value={this.state.slideIndex}
                >
                  <Tab label="Objetivos del modelo" value={0} />
                  <Tab label="Restricciones del modelo" value={1} />
                  <Tab label="Opciones avanzadas" value={2} onActive={this.handleOpen.bind(this)} />
                </Tabs>
                <SwipeableViews
                  index={this.state.slideIndex}
                  onChangeIndex={this.handleChange.bind(this)}
                >
                  <div style={styles.slide}>
                    <Objetivos />
                  </div>
                  <div style={styles.slide}>
                    <Restricciones />
                  </div>
                  <div style={styles.slide}>
                    <Otros />
                  </div>
                </SwipeableViews>
                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={this.handleClose.bind(this)}
                >
                  The actions in this window were passed in as an array of React objects.
                </Dialog>
            </div>
        );
    }
}

