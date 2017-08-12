import React from 'react';
import ReactDOM from 'react-dom';
import BarcodePrinter from './BarcodePrinter';

ReactDOM.render(<BarcodePrinter sku='fake-hello' labelSizeId='203' name='Red Shirt' price='99.99'/>, document.getElementById('root'));
