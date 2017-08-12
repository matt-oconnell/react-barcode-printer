import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barcode from './ReactBarcode';
import './BarcodePrinter.css';

const labelSizes = {
  201: {
    width: '3.5in',
    height: '50',
  },
}

const svgStyle = {
  width: '100%',
  height: 'auto',
};

class BarcodePrinter extends Component {
  render() {
    const wrapperStyle = {
      width: labelSizes[this.props.labelSizeId].width,
      height: 'auto'
    };

    return (
      <div style={wrapperStyle}>
        <Barcode svgStyles={svgStyle} value={this.props.sku} height={50} />
      </div>
    );
  }
}

BarcodePrinter.propTypes = {
  sku: PropTypes.string.isRequired,
  labelSizeId: PropTypes.number.isRequired,
};

export default BarcodePrinter;
