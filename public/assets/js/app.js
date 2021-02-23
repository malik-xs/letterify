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
      err: '',
      color: _this.props.value || '#343234',
      value: _this.props.value !== '' ? _this.props.value : 'Enter Your Text',
      fontFamily: _this.props.font,
      fontSize: 48
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
      canvasTxt.textBaseline = 'middle'; // Canvas can tell us the width

      this.props.callbackWidth(canvasTxt.measureText(value).width / fontSize);
      canvasTxt.fillText(value, canvasTxt.canvas.width / 2, canvasTxt.canvas.height / 2);
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

function app_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import GoogleFontLoader from 'react-google-font-loader';

var fonts = ['Almibar', 'PermanentMarker', 'SourceCodePro'];
var colors = ['#fff', '#000', '#971a1e', '#D40000', '#DAB0AA', '#fcf1f7', '#f199bf', '#e3568a', '#FC9E8B', '#f16728', '#E87400', '#faed12', '#faf8ae', '#e4ecb0', '#abcf37', '#97b94b', '#119f49', '#0f643d', '#1e214a', '#0d5488', '#083B9C', '#70c1ec', '#63888E', '#88cfbd', '#A2E8D9', '#dee8e7', '#8882b2', '#7d52a1', '#3D266E', '#b783a7', '#E5DDD0', '#fef7dd', '#D3AD12', '#c0ac94', '#6d4835', '#291A00', '#B5B0AC', '#808281', '#494B4E'];

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
      console.log(width); // this.handleChange( { target: { name: 'width', value: width } } );
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

      _this.setState({
        loading: true
      });

      var image = document.getElementById('canvasComponent');
      var imageURL = image.toDataURL('image/png');
      jQuery.ajax({
        type: 'POST',
        url: _this.props.ajaxurl,
        data: {
          action: 'ajax_save_photo',
          title: _this.state.value + Math.floor(Math.random() * 100 + 1),
          imgBase64: imageURL
        }
      }).done(function () {
        console.log('saved');
      });
      var data = {
        action: 'woocommerce_ajax_add_to_cart',
        product_id: 163,
        product_sku: '',
        price: 500,
        quantity: _this.state.quantity,
        variation_id: null
      }; // jQuery( document.body ).trigger( 'adding_to_cart', [ e.target, data ] );

      jQuery.ajax({
        type: 'post',
        url: wc_add_to_cart_params.ajax_url,
        data: data,
        beforeSend: function beforeSend(response) {// $thisbutton.removeClass('added').addClass('loading');
        },
        complete: function complete(response) {
          setTimeout(function () {
            _this.setState({
              loading: false
            });
          }, 1000); // $thisbutton.addClass('added').removeClass('loading');
        },
        success: function success(response) {
          console.log(response);

          if (!response.error) {// jQuery( document.body ).trigger('added_to_cart', [ response.fragments, response.cart_hash, e.target ]);
          }
        }
      });
    });

    _this.state = {
      value: '',
      height: '',
      width: 0,
      finish: '',
      color: '',
      font: 'Almibar',
      quantity: 1,
      loading: false,
      price: 0.59
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
      var _this2 = this;

      var parent = this;
      var state = parent.state;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap text-center"
      }, React.createElement(function () {
        return /*#__PURE__*/React.createElement(TextToImage, {
          font: state.font,
          color: state.color,
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
          display: this.state.height > 4 ? 'flex' : 'none'
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
        name: "color",
        id: "color",
        onChange: this.handleChange
      }, colors.map(function (c, i) {
        return /*#__PURE__*/React.createElement("option", {
          key: i,
          value: c
        }, c);
      }))), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap text-center xm-input-sm"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Approx. Width: "), state.value !== '' && state.height !== '' ? state.width + '"' : 'Enter text and select a Height to see Approx. Width.')), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap xm-input-sm"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Total Letter Count: "), state.value.replace(/\s/g, '').length)), /*#__PURE__*/React.createElement("div", {
        className: "xm-input-wrap xm-input-full"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "thickness",
        className: "text-right"
      }, /*#__PURE__*/React.createElement("strong", null, "Letter Connect")), /*#__PURE__*/React.createElement("select", {
        name: "letterConnect",
        id: "letterConnect",
        onChange: this.handleChange,
        value: state.letterConnect
      }, /*#__PURE__*/React.createElement("option", {
        value: ""
      }, "-- Please Select --"), /*#__PURE__*/React.createElement("option", {
        value: "502",
        price: "0"
      }, "As Shown "), /*#__PURE__*/React.createElement("option", {
        value: "503",
        price: "0"
      }, "Each Word Connected "), /*#__PURE__*/React.createElement("option", {
        value: "504",
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
        value: state.loading ? 'Loading...' : 'Add to cart',
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
      ajaxurl = _el$dataset.ajaxurl,
      wpNonce = _el$dataset.wpNonce;

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
    ajaxurl: ajaxurl,
    wpNonce: wpNonce
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