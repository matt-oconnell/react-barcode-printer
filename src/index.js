import React from 'react';
import ReactDOM from 'react-dom';
import BarcodePrinter from './BarcodePrinter';

ReactDOM.render(<BarcodePrinter sku='fake-hello' labelSizeId={201}/>, document.getElementById('root'));
