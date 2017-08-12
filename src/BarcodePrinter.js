import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barcode from './ReactBarcode';
import './BarcodePrinter.css';

const labelSizes = {
  '201': {
    width: '4.5in',
    height: 47,
  },
  '203': {
    width: '2.5in',
    height: 20,
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
      <div className="barcode-printer" style={wrapperStyle}>
        <div className="barcode-info">
          <span>{this.props.name}</span>
          <span>{this.props.price}</span>
        </div>
        <Barcode
          svgStyles={svgStyle}
          value={this.props.sku}
          height={labelSizes[this.props.labelSizeId].height}
          margin={0}
          fontSize={12}
        />
      </div>
    );
  }
}

BarcodePrinter.propTypes = {
  sku: PropTypes.string.isRequired,
  labelSizeId: PropTypes.oneOf(Object.keys(labelSizes)).isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BarcodePrinter;
