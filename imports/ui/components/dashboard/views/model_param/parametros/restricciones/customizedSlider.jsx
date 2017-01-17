import React, { Component, PropTypes } from 'react';

require('rc-slider/assets/index.css');
var Slider = require('rc-slider');

const style = {
    width: '50%',
    float: 'left',
}

const marks = { 50: "50%", 25:"25%" , 0:<strong>0%</strong> , "-25":"-25%" , "-50":"-50%" };

export default class CustomizedSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      valueP: 25,
      valueN: -25,
    };
  }

  onSliderChange(value) {
    let vP = -value[0];
    let vN = value[0];
    this.setState({
      valueP:vP,
      valueN:vN,
    });
    this.props.changeHandler(vP);
  };

  onSliderChange2(value) {
    let vP = value[1];
    let vN = -value[1];
    this.setState({
      valueP:vP,
      valueN:vN,
    });
    this.props.changeHandler(vP);
  };

  render() {
    return (
      <div>
        <div style={style}>
          <Slider
          min={-50} max={0} value={[this.state.valueN, 0]}
          onChange={this.onSliderChange.bind(this)} onAfterChange={this.onAfterChange}
          range={true} allowCross={false} pushable={true} marks={marks}
          />
        </div>
        <div style={style}>
          <Slider onChange={this.onSliderChange2.bind(this)} min={0} max={50}
          value={[0, this.state.valueP]} range={true} allowCross={false}
          onAfterChange={this.onAfterChange} pushable={true} marks={marks}/>
        </div>
      </div>
    );
  }
}
