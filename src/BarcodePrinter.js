import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barcode from './ReactBarcode';
import './BarcodePrinter.css';

const labelSizes = {
  '201': {
    height: 31,
  },
  '204': {
    height: 24,
  },
};

const svgStyle = {
  width: '100%',
  height: 'auto',
};

class BarcodePrinter extends Component {
  render() {
    const { labelSizeId, size, name, price, sku } = this.props;
    const { height } = labelSizes[labelSizeId];
    return (
      <div className={'barcode-printer size-' + labelSizeId}>
        <div className="barcode-info">
          <span>{name} [{size}]</span>
          <span>{price}</span>
        </div>
        <Barcode
          svgStyles={svgStyle}
          value={sku}
          height={height}
          margin={0}
          marginTop={0}
          fontSize={7}
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
  size: PropTypes.string,
};

export default BarcodePrinter;
