import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BarcodePrinter from './BarcodePrinter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelSizeId: '201',
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.setState({
      labelSizeId: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <BarcodePrinter
          sku='11562'
          labelSizeId={this.state.labelSizeId}
          name='Red Shirt'
          price='$99.99'
          size='XXL'
        />
        <div className="no-print">
          <select onChange={this.handleSelect}>
            <option value="201">201</option>
            <option value="204">204</option>
          </select>
          <input type="button" onClick={window.print} value="print!" />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('root'));
