'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Message.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Message = function (_Component) {
  _inherits(Message, _Component);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      var show = nextProps.show;

      if (show) {
        document.body.style = 'overflow: hidden;';
        this.messageBox.className = 'message-box in';
      } else {
        document.body.style = '';
        this.messageBox.className = 'message-box';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var msg = this.props.msg;

      return _react2.default.createElement(
        'div',
        { className: 'message-box', ref: function ref(n) {
            _this2.messageBox = n;
          } },
        _react2.default.createElement('div', { className: 'message-modal' }),
        _react2.default.createElement(
          'div',
          { className: 'message-content-box' },
          _react2.default.createElement(
            'div',
            { className: 'content-content' },
            _react2.default.createElement(
              'div',
              { className: 'content-body' },
              _react2.default.createElement(
                'span',
                null,
                msg
              )
            )
          )
        )
      );
    }
  }]);

  return Message;
}(_react.Component);

exports.default = Message;

Message.propTypes = {
  show: _react.PropTypes.bool.isRequired,
  msg: _react.PropTypes.string.isRequired
};
//# sourceMappingURL=Message.js.map