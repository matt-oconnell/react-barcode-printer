import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Barcode from './ReactBarcode';
import './BarcodePrinter.css';

export const labelSizes = {
  '201': { // 1.1 x 3.5
    height: 28,
  },
  '204': { // .66 x 2.1
    height: 34,
  },
};

class BarcodePrinter extends Component {
  render() {
    const { labelSizeId, size, name, price, sku, barcode } = this.props;
    const { height } = labelSizes[labelSizeId];
    return (
      <div className={'barcode-printer size-' + labelSizeId}>
        <div className="barcode-info">
          <span>{name}  {size && <span>[{size}]</span> }</span>
          <span>{price}</span>
        </div>
        <Barcode
          value={barcode}
          height={height}
          margin={0}
          marginTop={0}
          displayValue={false}
          ref = {el => this.barcode = el}
        />
        <span className="sku">{sku}</span>
      </div>
    );
  }
}

BarcodePrinter.propTypes = {
  sku: PropTypes.string.isRequired,
  barcode: PropTypes.string.isRequired,
  labelSizeId: PropTypes.oneOf(Object.keys(labelSizes)).isRequired,
  price: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default BarcodePrinter;
