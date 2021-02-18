/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/utils/TextToImage.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var TextToImage = /*#__PURE__*/function (_React$Component) {
  _inherits(TextToImage, _React$Component);

  var _super = _createSuper(TextToImage);

  function TextToImage(props) {
    var _this;

    _classCallCheck(this, TextToImage);

    _this = _super.call(this, props);
    _this.state = {
      img: '',
      err: ''
    };
    return _this;
  }

  _createClass(TextToImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var font = this.props.font;
      var canvasTxt = document.getElementById('canvasComponent').getContext('2d');
      canvasTxt.canvas.width = 500;
      canvasTxt.canvas.height = 100;
      canvasTxt.textAlign = 'center';
      canvasTxt.textBaseline = 'middle';
      canvasTxt.font = '24px Arial';
      canvasTxt.fillText(this.props.name, canvasTxt.canvas.width / 2, canvasTxt.canvas.height / 2); // var junction_font = new FontFace( font, 'url("https://fonts.googleapis.com/css2?family=' + font + '&display=swap")' );
      // junction_font.load().then( function( loaded_face ) {
      // 	document.fonts.add( loaded_face );
      // 	canvasTxt.font = '24px ' + loaded_face;
      // } );

      this.setState({
        img: canvasTxt.canvas.toDataURL()
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("canvas", {
        id: "canvasComponent",
        style: {
          display: 'none'
        }
      }), this.state.img.length > 0 ? /*#__PURE__*/React.createElement("img", {
        id: "imageComponent",
        src: this.state.img
      }) : null);
    }
  }]);

  return TextToImage;
}(React.Component);


;// CONCATENATED MODULE: ./src/app.js
function app_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { app_typeof = function _typeof(obj) { return typeof obj; }; } else { app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return app_typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

function app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) app_setPrototypeOf(subClass, superClass); }

function app_setPrototypeOf(o, p) { app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return app_setPrototypeOf(o, p); }

function app_createSuper(Derived) { var hasNativeReflectConstruct = app_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = app_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = app_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return app_possibleConstructorReturn(this, result); }; }

function app_possibleConstructorReturn(self, call) { if (call && (app_typeof(call) === "object" || typeof call === "function")) { return call; } return app_assertThisInitialized(self); }

function app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function app_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import GoogleFontLoader from 'react-google-font-loader';


var LetterifyEl = /*#__PURE__*/function (_React$Component) {
  app_inherits(LetterifyEl, _React$Component);

  var _super = app_createSuper(LetterifyEl);

  function LetterifyEl(props) {
    var _this;

    app_classCallCheck(this, LetterifyEl);

    _this = _super.call(this, props);

    _defineProperty(app_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _this.state = {
      value: '',
      size: 24,
      font: 'Roboto'
    };
    return _this;
  }

  app_createClass(LetterifyEl, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var parent = this;
      var state = parent.state;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, React.createElement(function () {
        return /*#__PURE__*/React.createElement(TextToImage, {
          name: state.value || '',
          x: "0",
          y: "10",
          font: state.font
        });
      })), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("input", {
        name: "value",
        value: state.value,
        onChange: this.handleChange,
        placeholder: 'Enter your text'
      })), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "font"
      }), /*#__PURE__*/React.createElement("select", {
        name: "font",
        id: "font"
      }, /*#__PURE__*/React.createElement("option", {
        value: "volvo"
      }, "Volvo"), /*#__PURE__*/React.createElement("option", {
        value: "saab"
      }, "Saab"), /*#__PURE__*/React.createElement("option", {
        value: "mercedes"
      }, "Mercedes"), /*#__PURE__*/React.createElement("option", {
        value: "audi"
      }, "Audi"))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "size",
        value: state.size,
        onChange: this.handleChange,
        placeholder: 'Enter your size`'
      }))));
    }
  }]);

  return LetterifyEl;
}(React.Component);
/**
 * Init Function
 *
 * @param $scope
 */


var init = function init($scope) {
  var _$scope$find = $scope.find('.xm-letterify-form-wrapper'),
      _$scope$find2 = _slicedToArray(_$scope$find, 1),
      el = _$scope$find2[0];

  if (!el) {
    return;
  }

  var _$scope$find3 = $scope.find('.xm-letterify-template'),
      _$scope$find4 = _slicedToArray(_$scope$find3, 1),
      templateEl = _$scope$find4[0];

  if (!templateEl) {
    return;
  }
  /**
   * Renders the main component
   */


  ReactDOM.render(React.createElement(LetterifyEl, {
    templateEl: templateEl
  }), el);
};

jQuery(window).on('elementor/frontend/init', function () {}).on('load', function () {
  var shortcodeEls = document.querySelectorAll('.xm-letterify');
  shortcodeEls.forEach(function (el) {
    init(jQuery(el));
  });
});
/******/ })()
;