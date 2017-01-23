import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {Tabs, Tab} from 'material-ui/Tabs';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

// components
import LDif from './components/iDif/lDif';
import LPrecio from './components/lPrecio/lPrecio';

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

export default class ProductLinks extends Component {
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
                <Tab label="Diferencia precio" value={0} />
                <Tab label="Igual precio" value={1} />
                <Tab label="Formato" value={2} />
                <Tab label="Marca propia" value={3} />
              </Tabs>
              <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange.bind(this)}
              >
                <div style={styles.slide}>
                  <LDif />
                </div>
                <div style={styles.slide}>
                  <LPrecio />
                </div>
                <div style={styles.slide}>
                  Formato
                </div>
                <div style={styles.slide}>
                  Marca propia
                </div>
              </SwipeableViews>
            </div>
        );
    }
}
