/*
  note: this was pulled from https://github.com/kciter/react-barcode
  added ability to disable aspectRatio on SVG
*/

var React = require('react');
var JsBarcode = require('jsbarcode');
var createClass = require('create-react-class');
var PropTypes = require('prop-types');

const getDOMNode = (ref) => ref;

var Barcode = createClass({
  propTypes: {
    value: PropTypes.string.isRequired,
    renderer: PropTypes.string,
    format: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    displayValue: PropTypes.bool,
    fontOptions: PropTypes.string,
    font: PropTypes.string,
    textAlign: PropTypes.string,
    textPosition: PropTypes.string,
    textMargin: PropTypes.number,
    fontSize: PropTypes.number,
    background: PropTypes.string,
    lineColor: PropTypes.string,
    margin: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
    svgStyles: PropTypes.object
  },

  getDefaultProps: function() {
    return {
      format: 'CODE128',
      renderer: 'svg',
      width: 2,
      height: 100,
      displayValue: true,
      fontOptions: '',
      font: 'monospace',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      lineColor: '#000000',
      margin: 10,
      svgStyles: {},
    };
  },

  shouldComponentUpdate: function(nextProps) {
    return Object.keys(Barcode.propTypes).some((k) => this.props[k] !== nextProps[k]);
  },

  componentDidMount: function() {
    this.update();
  },

  componentDidUpdate: function() {
    this.update();
  },

  update: function() {
    var renderElement = getDOMNode(this.refs.renderElement);
    new JsBarcode(renderElement, this.props.value, this.props);
  },

  render: function() {
    if (this.props.renderer === 'svg') {
      return (
        <svg ref="renderElement" preserveAspectRatio="none" style={this.props.svgStyles} />
      );
    } else if (this.props.renderer === 'canvas') {
      return (
        <canvas ref="renderElement" />
      );
    }
  },
});

module.exports = Barcode;
