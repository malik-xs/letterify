/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 570:
/***/ ((module) => {

module.exports = JSON.parse('{"data":[{"value":"#ffffff","label":"White"},{"value":"#000000","label":"Black"},{"value":"#971a1e","label":"Barn Red"},{"value":"#D40000","label":"RedMetallic Rose"},{"value":"#DAB0AA","label":"Princess Pink"},{"value":"#fcf1f7","label":"Lisa Pink"},{"value":"#f199bf","label":"#f199bf"},{"value":"#e3568a","label":"#e3568a"},{"value":"#FC9E8B","label":"#FC9E8B"},{"value":"#f16728","label":"#f16728"},{"value":"#E87400","label":"#E87400"},{"value":"#faed12","label":"#faed12"},{"value":"#faf8ae","label":"#faf8ae"},{"value":"#e4ecb0","label":"#e4ecb0"},{"value":"#abcf37","label":"#abcf37"},{"value":"#97b94b","label":"#97b94b"},{"value":"#119f49","label":"#119f49"},{"value":"#0f643d","label":"#0f643d"},{"value":"#1e214a","label":"#1e214a"},{"value":"#0d5488","label":"#0d5488"},{"value":"#083B9C","label":"#083B9C"},{"value":"#70c1ec","label":"#70c1ec"},{"value":"#63888E","label":"#63888E"},{"value":"#88cfbd","label":"#88cfbd"},{"value":"#A2E8D9","label":"#A2E8D9"},{"value":"#dee8e7","label":"#dee8e7"},{"value":"#8882b2","label":"#8882b2"},{"value":"#7d52a1","label":"#7d52a1"},{"value":"#3D266E","label":"#3D266E"},{"value":"#b783a7","label":"#b783a7"},{"value":"#E5DDD0","label":"#E5DDD0"},{"value":"#fef7dd","label":"#fef7dd"},{"value":"#D3AD12","label":"#D3AD12"},{"value":"#c0ac94","label":"#c0ac94"},{"value":"#6d4835","label":"#6d4835"},{"value":"#291A00","label":"#291A00"},{"value":"#B5B0AC","label":"#B5B0AC"},{"value":"#808281","label":"#808281"},{"value":"#494B4E","label":"#494B4E"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
      err: '',
      color: _this.props.color,
      value: _this.props.value !== '' ? _this.props.value : 'Enter Your Text',
      fontFamily: _this.props.font,
      fontSize: 42
    };
    return _this;
  }

  _createClass(TextToImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$state = this.state,
          value = _this$state.value,
          color = _this$state.color,
          fontFamily = _this$state.fontFamily,
          fontSize = _this$state.fontSize;
      var font = 'bold ' + fontSize + 'px "' + fontFamily + '"';
      var canvasTxt = document.getElementById('canvasComponent').getContext('2d');
      canvasTxt.canvas.width = 500;
      canvasTxt.canvas.height = 100;
      canvasTxt.clearRect(0, 0, 500, 100);
      canvasTxt.font = font;
      canvasTxt.fillStyle = color;
      canvasTxt.textAlign = 'center';
      canvasTxt.textBaseline = 'middle';
      var text = this.props.connect === 'individual' ? value.split('').join(' ') : value; // Canvas can tell us the width

      this.props.callbackWidth(canvasTxt.measureText(value).width / fontSize);
      canvasTxt.fillText(text, canvasTxt.canvas.width / 2, canvasTxt.canvas.height / 2);
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
      }), this.state.img ? /*#__PURE__*/React.createElement("img", {
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

function app_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var fonts = ['Almibar', 'AlwaysAGoodTime', 'Betterfly', 'BreakingBread', 'Brusher', 'BukhariScript', 'GrandHotel', 'HickoryJack', 'Kaleidos', 'Lavanderia', 'Norican', 'PermanentMarker', 'Sanelma', 'Sophia', 'StorytellerScript'];

var colors_fallback = __webpack_require__(570);

var LetterifyEl = /*#__PURE__*/function (_React$Component) {
  app_inherits(LetterifyEl, _React$Component);

  var _super = app_createSuper(LetterifyEl);

  function LetterifyEl(props) {
    var _this;

    app_classCallCheck(this, LetterifyEl);

    _this = _super.call(this, props);

    _defineProperty(app_assertThisInitialized(_this), "callbackWidth", function (v) {
      var height = _this.state.height;
      var width = Number(v) * Number(height);

      _this.handleChange({
        target: {
          name: 'width',
          value: width
        }
      });
    });

    _defineProperty(app_assertThisInitialized(_this), "handleChange", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      if (_this.state[name] !== value) {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    _defineProperty(app_assertThisInitialized(_this), "handleSubmit", function (e) {
      e.preventDefault();

      if (_this.state.added_to_cart) {
        window.location = letterify_admin_var.cart_url;
        return;
      }

      _this.setState({
        loading: true
      });

      var image = document.getElementById('canvasComponent');
      var imageURL = image.toDataURL('image/png');
      var data = {
        action: 'woocommerce_ajax_add_to_cart',
        value: _this.state.value,
        price: (0.59 * (_this.state.value.replace(/\s/g, '').length > 0 ? _this.state.value.replace(/\s/g, '').length : 1)).toFixed(2),
        quantity: _this.state.quantity,
        variation_id: null,
        imgBase64: imageURL,
        finish: _this.state.finish,
        height: _this.state.height,
        thickness: _this.state.thickness,
        mounting: _this.state.mounting,
        color: _this.state.color,
        width: _this.state.width,
        connect: _this.state.connect,
        font: _this.state.font
      };
      jQuery.ajax({
        type: 'post',
        url: wc_add_to_cart_params.ajax_url,
        data: data,
        beforeSend: function beforeSend(response) {
          _this.setState({
            add_to_cart_text: 'Adding to cart'
          });
        },
        complete: function complete(response) {
          setTimeout(function () {
            _this.setState({
              loading: false
            });
          }, 1000);
        },
        success: function success(response) {
          if (!response.error) {
            _this.setState({
              add_to_cart_text: 'View Cart',
              added_to_cart: true
            });
          }
        },
        error: function error(_error) {
          _this.setState({
            add_to_cart_text: 'Unsuccessful'
          });

          setTimeout(function () {
            _this.setState({
              add_to_cart_text: 'Add to cart'
            });
          }, 1000);
        }
      });
    });

    var colors_data = JSON.parse(props.colors);
    _this.state = {
      value: '',
      height: '',
      width: 0,
      finish: '',
      color: '#343234',
      colors: props.colors !== '' && Array.isArray(colors_data.data) ? colors_data.data : colors_fallback.data,
      font: 'Almibar',
      connect: '',
      quantity: 1,
      loaded: false,
      price: 0.59,
      mounting: '',
      add_to_cart_text: 'Add to cart',
      added_to_cart: false
    };
    return _this;
  }

  app_createClass(LetterifyEl, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        loaded: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var parent = this;
      var state = parent.state;

      if (!state.loaded) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h4", null, "Loading"));
      }

      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap text-center"
      }, React.createElement(function () {
        return /*#__PURE__*/React.createElement(TextToImage, {
          font: state.font,
          color: state.color,
          connect: state.connect,
          callbackWidth: _this2.callbackWidth,
          value: state.value || '',
          x: "0",
          y: "10"
        });
      })), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("input", {
        name: "value",
        className: "xm-entry-text",
        value: state.value,
        onChange: this.handleChange,
        placeholder: 'Enter your text'
      })), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "font",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Choose Font")), /*#__PURE__*/React.createElement("select", {
        name: "font",
        id: "font",
        onChange: this.handleChange,
        value: state.font
      }, fonts.map(function (f, i) {
        return /*#__PURE__*/React.createElement("option", {
          key: i,
          value: f
        }, f);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "finish",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Finish")), /*#__PURE__*/React.createElement("select", {
        name: "finish",
        id: "finish",
        onChange: this.handleChange,
        value: state.finish
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Choose Finish..."), /*#__PURE__*/React.createElement("option", {
        value: "painted"
      }, "Painted"), /*#__PURE__*/React.createElement("option", {
        value: "unpainted"
      }, "Unpainted"))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: state.finish === '' ? 'none' : 'flex'
        }
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "height",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Height")), /*#__PURE__*/React.createElement("select", {
        name: "height",
        id: "height",
        onChange: this.handleChange,
        value: state.height
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Choose Height..."), /*#__PURE__*/React.createElement("option", {
        value: "1",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "1 inch"), /*#__PURE__*/React.createElement("option", {
        value: "2",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "2 inch"), /*#__PURE__*/React.createElement("option", {
        value: "3",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "3 inch"), /*#__PURE__*/React.createElement("option", {
        value: "4"
      }, "4 inch"), /*#__PURE__*/React.createElement("option", {
        value: "5"
      }, "5 inch"), /*#__PURE__*/React.createElement("option", {
        value: "6"
      }, "6 inch"), /*#__PURE__*/React.createElement("option", {
        value: "7"
      }, "7 inch"), /*#__PURE__*/React.createElement("option", {
        value: "8"
      }, "8 inch"), /*#__PURE__*/React.createElement("option", {
        value: "9"
      }, "9 inch"), /*#__PURE__*/React.createElement("option", {
        value: "10"
      }, "10 inch"), /*#__PURE__*/React.createElement("option", {
        value: "11"
      }, "11 inch"), /*#__PURE__*/React.createElement("option", {
        value: "12"
      }, "12 inch"), /*#__PURE__*/React.createElement("option", {
        value: "13"
      }, "13 inch"), /*#__PURE__*/React.createElement("option", {
        value: "14"
      }, "14 inch"), /*#__PURE__*/React.createElement("option", {
        value: "15"
      }, "15 inch"), /*#__PURE__*/React.createElement("option", {
        value: "16"
      }, "16 inch"), /*#__PURE__*/React.createElement("option", {
        value: "17"
      }, "17 inch"), /*#__PURE__*/React.createElement("option", {
        value: "18"
      }, "18 inch"))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: state.height === '' ? 'none' : 'flex'
        }
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "thickness",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Thickness")), /*#__PURE__*/React.createElement("select", {
        name: "thickness",
        id: "thickness",
        onChange: this.handleChange
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Choose Thickness..."), /*#__PURE__*/React.createElement("option", {
        value: "1/8 inch"
      }, "1/8 inch"), /*#__PURE__*/React.createElement("option", {
        value: "1/4 inch"
      }, "1/4 inch"), /*#__PURE__*/React.createElement("option", {
        value: "3/8 inch"
      }, "3/8 inch"), /*#__PURE__*/React.createElement("option", {
        value: "1/2 inch"
      }, "1/2 inch"), /*#__PURE__*/React.createElement("option", {
        value: "3/4 inch"
      }, "3/4 inch"))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: state.height === '' ? 'none' : 'flex'
        }
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "mounting",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Mounting")), /*#__PURE__*/React.createElement("select", {
        name: "mounting",
        id: "mounting",
        onChange: this.handleChange
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "- Select an Option -"), /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "Hanging Strips & Paper Template (+10%)"), /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "None"))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: this.state.finish === 'painted' ? 'flex' : 'none'
        }
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "color",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Color")), /*#__PURE__*/React.createElement("select", {
        className: "",
        name: "color",
        id: "color",
        onChange: this.handleChange,
        "data-dot-style": state.color
      }, state.colors.map(function (f, i) {
        return /*#__PURE__*/React.createElement("option", {
          style: {
            background: 'linear-gradient(to right , ' + f.value + ' 20%, #ffffff 20%)'
          },
          className: 'xm-input-color-' + f.value,
          key: i,
          value: f.value
        }, f.label);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap text-center xm-input-sm"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Approx. Width: "), state.value !== '' && state.height !== '' ? state.width.toFixed(2) + '"' : 'Enter text and select a Height to see Approx. Width.')), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap xm-input-sm"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Total Letter Count: "), state.value.replace(/\s/g, '').length)), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap xm-input-full"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "connect",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Letter Connect")), /*#__PURE__*/React.createElement("select", {
        name: "connect",
        id: "connect",
        onChange: this.handleChange,
        value: state.connect
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "-- Please Select --"), /*#__PURE__*/React.createElement("option", {
        value: "shown",
        price: "0"
      }, "As Shown "), /*#__PURE__*/React.createElement("option", {
        value: "connect",
        price: "0"
      }, "Each Word Connected "), /*#__PURE__*/React.createElement("option", {
        value: "individual",
        price: "0"
      }, "Individual Letters "))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        className: "xm-input-frag"
      }, "Starting At: $", (0.59 * (this.state.value.replace(/\s/g, '').length > 0 ? this.state.value.replace(/\s/g, '').length : 1) * (state.quantity > 0 ? state.quantity : 1)).toFixed(2)), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-frag"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "quantity",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Qty")), /*#__PURE__*/React.createElement("input", {
        type: "number",
        name: "quantity",
        value: state.quantity,
        onChange: this.handleChange,
        placeholder: 'Enter your size'
      })), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-frag"
      }, /*#__PURE__*/React.createElement("input", {
        type: "submit",
        name: "submit",
        className: "xm-input-submit",
        disabled: state.loading,
        value: this.state.add_to_cart_text,
        onClick: this.handleSubmit
      })))));
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

  var _el$dataset = el.dataset,
      letterify_admin_var = _el$dataset.letterify_admin_var,
      wpNonce = _el$dataset.wpNonce,
      colors = _el$dataset.colors;

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
    templateEl: templateEl,
    letterify_admin_var: letterify_admin_var,
    wpNonce: wpNonce,
    colors: colors
  }), el);
};

jQuery(window).on('elementor/frontend/init', function () {}).on('load', function () {
  var shortcodeEls = document.querySelectorAll('.xm-letterify');
  shortcodeEls.forEach(function (el) {
    init(jQuery(el));
  });
});
})();

/******/ })()
;