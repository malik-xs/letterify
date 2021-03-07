/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 570:
/***/ ((module) => {

module.exports = JSON.parse('{"data":[{"value":"#ffffff","label":"White"},{"value":"#000000","label":"Black"},{"value":"#971a1e","label":"Barn Red"},{"value":"#D40000","label":"RedMetallic Rose"},{"value":"#DAB0AA","label":"Princess Pink"},{"value":"#fcf1f7","label":"Lisa Pink"},{"value":"#f199bf","label":"#f199bf"},{"value":"#e3568a","label":"#e3568a"},{"value":"#FC9E8B","label":"#FC9E8B"},{"value":"#f16728","label":"#f16728"},{"value":"#E87400","label":"#E87400"},{"value":"#faed12","label":"#faed12"},{"value":"#faf8ae","label":"#faf8ae"},{"value":"#e4ecb0","label":"#e4ecb0"},{"value":"#abcf37","label":"#abcf37"},{"value":"#97b94b","label":"#97b94b"},{"value":"#119f49","label":"#119f49"},{"value":"#0f643d","label":"#0f643d"},{"value":"#1e214a","label":"#1e214a"},{"value":"#0d5488","label":"#0d5488"},{"value":"#083B9C","label":"#083B9C"},{"value":"#70c1ec","label":"#70c1ec"},{"value":"#63888E","label":"#63888E"},{"value":"#88cfbd","label":"#88cfbd"},{"value":"#A2E8D9","label":"#A2E8D9"},{"value":"#dee8e7","label":"#dee8e7"},{"value":"#8882b2","label":"#8882b2"},{"value":"#7d52a1","label":"#7d52a1"},{"value":"#3D266E","label":"#3D266E"},{"value":"#b783a7","label":"#b783a7"},{"value":"#E5DDD0","label":"#E5DDD0"},{"value":"#fef7dd","label":"#fef7dd"},{"value":"#D3AD12","label":"#D3AD12"},{"value":"#c0ac94","label":"#c0ac94"},{"value":"#6d4835","label":"#6d4835"},{"value":"#291A00","label":"#291A00"},{"value":"#B5B0AC","label":"#B5B0AC"},{"value":"#808281","label":"#808281"},{"value":"#494B4E","label":"#494B4E"}]}');

/***/ }),

/***/ 418:
/***/ ((module) => {

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l=__webpack_require__(418),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113,z=n?Symbol.for("react.memo"):60115,A=n?Symbol.for("react.lazy"):
60116,B="function"===typeof Symbol&&Symbol.iterator;function C(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E={};function F(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}F.prototype.isReactComponent={};F.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(C(85));this.updater.enqueueSetState(this,a,b,"setState")};F.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function G(){}G.prototype=F.prototype;function H(a,b,c){this.props=a;this.context=b;this.refs=E;this.updater=c||D}var I=H.prototype=new G;I.constructor=H;l(I,F.prototype);I.isPureReactComponent=!0;var J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,k=null;if(null!=b)for(e in void 0!==b.ref&&(k=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var h=Array(f),m=0;m<f;m++)h[m]=arguments[m+2];d.children=h}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:k,props:d,_owner:J.current}}
function N(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g,Q=[];function R(a,b,c,e){if(Q.length){var d=Q.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function S(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>Q.length&&Q.push(a)}
function T(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+U(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var k=0;k<a.length;k++){d=a[k];var f=b+U(d,k);g+=T(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=B&&a[B]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),k=
0;!(d=a.next()).done;)d=d.value,f=b+U(d,k++),g+=T(d,f,c,e);else if("object"===d)throw c=""+a,Error(C(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function V(a,b,c){return null==a?0:T(a,"",b,c)}function U(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function W(a,b){a.func.call(a.context,b,a.count++)}
function aa(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?X(a,e,c,function(a){return a}):null!=a&&(O(a)&&(a=N(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+c)),e.push(a))}function X(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(P,"$&/")+"/");b=R(b,g,e,d);V(a,aa,b);S(b)}var Y={current:null};function Z(){var a=Y.current;if(null===a)throw Error(C(321));return a}
var ba={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:l};exports.Children={map:function(a,b,c){if(null==a)return a;var e=[];X(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=R(null,null,b,c);V(a,W,b);S(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];X(a,b,null,function(a){return a});return b},only:function(a){if(!O(a))throw Error(C(143));return a}};
exports.Component=F;exports.Fragment=r;exports.Profiler=u;exports.PureComponent=H;exports.StrictMode=t;exports.Suspense=y;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ba;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(C(267,a));var e=l({},a.props),d=a.key,g=a.ref,k=a._owner;if(null!=b){void 0!==b.ref&&(g=b.ref,k=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(h in b)K.call(b,h)&&!L.hasOwnProperty(h)&&(e[h]=void 0===b[h]&&void 0!==f?f[h]:b[h])}var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){f=Array(h);for(var m=0;m<h;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,
key:d,ref:g,props:e,_owner:k}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:x,render:a}};exports.isValidElement=O;
exports.lazy=function(a){return{$$typeof:A,_ctor:a,_status:-1,_result:null}};exports.memo=function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return Z().useCallback(a,b)};exports.useContext=function(a,b){return Z().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return Z().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return Z().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return Z().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return Z().useMemo(a,b)};exports.useReducer=function(a,b,c){return Z().useReducer(a,b,c)};exports.useRef=function(a){return Z().useRef(a)};exports.useState=function(a){return Z().useState(a)};exports.version="16.14.0";


/***/ }),

/***/ 294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(408);
} else {}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
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

function app_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import GoogleFontLoader from 'react-google-font-loader';



var fonts = ['Almibar', 'PermanentMarker', 'SourceCodePro'];

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

      _this.setState({
        loading: true
      });

      var image = document.getElementById('canvasComponent');
      var imageURL = image.toDataURL('image/png'); // jQuery.ajax( {
      // 	type: 'POST',
      // 	url: this.props.ajaxurl,
      // 	data: { action: 'ajax_save_photo', title: this.state.value + Math.floor( ( Math.random() * 100 ) + 1 ), imgBase64: imageURL },
      // } ).done( function() {
      // 	console.log( 'saved' );
      // } );

      var data = {
        action: 'woocommerce_ajax_add_to_cart',
        value: _this.state.value,
        price: (0.59 * (_this.state.value.replace(/\s/g, '').length > 0 ? _this.state.value.replace(/\s/g, '').length : 1)).toFixed(2),
        quantity: _this.state.quantity,
        variation_id: null,
        imgBase64: imageURL
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
      color: '#343234',
      colors: props.colors !== '' && Array.isArray(JSON.parse(props.colors)) ? JSON.parse(props.colors).data : colors_fallback,
      font: 'Almibar',
      connect: '',
      quantity: 1,
      loaded: false,
      price: 0.59
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
        return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h4", null, "Loading"));
      }

      return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("form", null, /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap text-center"
      }, /*#__PURE__*/react.createElement(function () {
        return /*#__PURE__*/react.createElement(TextToImage, {
          font: state.font,
          color: state.color,
          connect: state.connect,
          callbackWidth: _this2.callbackWidth,
          value: state.value || '',
          x: "0",
          y: "10"
        });
      })), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/react.createElement("input", {
        name: "value",
        className: "xm-entry-text",
        value: state.value,
        onChange: this.handleChange,
        placeholder: 'Enter your text'
      })), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "font",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Choose Font")), /*#__PURE__*/react.createElement("select", {
        name: "font",
        id: "font",
        onChange: this.handleChange,
        value: state.font
      }, fonts.map(function (f, i) {
        return /*#__PURE__*/react.createElement("option", {
          key: i,
          value: f
        }, f);
      }))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "finish",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Finish")), /*#__PURE__*/react.createElement("select", {
        name: "finish",
        id: "finish",
        onChange: this.handleChange,
        value: state.finish
      }, /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "Choose Finish..."), /*#__PURE__*/react.createElement("option", {
        value: "painted"
      }, "Painted"), /*#__PURE__*/react.createElement("option", {
        value: "unpainted"
      }, "Unpainted"))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: state.finish === '' ? 'none' : 'flex'
        }
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "height",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Height")), /*#__PURE__*/react.createElement("select", {
        name: "height",
        id: "height",
        onChange: this.handleChange,
        value: state.height
      }, /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "Choose Height..."), /*#__PURE__*/react.createElement("option", {
        value: "1",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "1 inch"), /*#__PURE__*/react.createElement("option", {
        value: "2",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "2 inch"), /*#__PURE__*/react.createElement("option", {
        value: "3",
        style: {
          display: state.finish === 'painted' ? 'none' : 'block'
        }
      }, "3 inch"), /*#__PURE__*/react.createElement("option", {
        value: "4"
      }, "4 inch"), /*#__PURE__*/react.createElement("option", {
        value: "5"
      }, "5 inch"), /*#__PURE__*/react.createElement("option", {
        value: "6"
      }, "6 inch"), /*#__PURE__*/react.createElement("option", {
        value: "7"
      }, "7 inch"), /*#__PURE__*/react.createElement("option", {
        value: "8"
      }, "8 inch"), /*#__PURE__*/react.createElement("option", {
        value: "9"
      }, "9 inch"), /*#__PURE__*/react.createElement("option", {
        value: "10"
      }, "10 inch"), /*#__PURE__*/react.createElement("option", {
        value: "11"
      }, "11 inch"), /*#__PURE__*/react.createElement("option", {
        value: "12"
      }, "12 inch"), /*#__PURE__*/react.createElement("option", {
        value: "13"
      }, "13 inch"), /*#__PURE__*/react.createElement("option", {
        value: "14"
      }, "14 inch"), /*#__PURE__*/react.createElement("option", {
        value: "15"
      }, "15 inch"), /*#__PURE__*/react.createElement("option", {
        value: "16"
      }, "16 inch"), /*#__PURE__*/react.createElement("option", {
        value: "17"
      }, "17 inch"), /*#__PURE__*/react.createElement("option", {
        value: "18"
      }, "18 inch"))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: state.height === '' ? 'none' : 'flex'
        }
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "thickness",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Thickness")), /*#__PURE__*/react.createElement("select", {
        name: "thickness",
        id: "thickness",
        onChange: this.handleChange
      }, /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "Choose Thickness..."), /*#__PURE__*/react.createElement("option", {
        value: "1/8 inch"
      }, "1/8 inch"), /*#__PURE__*/react.createElement("option", {
        value: "1/4 inch"
      }, "1/4 inch"), /*#__PURE__*/react.createElement("option", {
        value: "3/8 inch"
      }, "3/8 inch"), /*#__PURE__*/react.createElement("option", {
        value: "1/2 inch"
      }, "1/2 inch"), /*#__PURE__*/react.createElement("option", {
        value: "3/4 inch"
      }, "3/4 inch"))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: this.state.height > 4 ? 'flex' : 'none'
        }
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "mounting",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Mounting")), /*#__PURE__*/react.createElement("select", {
        name: "mounting",
        id: "mounting",
        onChange: this.handleChange
      }, /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "- Select an Option -"), /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "Hanging Strips & Paper Template (+10%)"), /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "None"))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap",
        style: {
          display: this.state.finish === 'painted' ? 'flex' : 'none'
        }
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "color",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Color")), /*#__PURE__*/react.createElement("select", {
        className: "",
        name: "color",
        id: "color",
        onChange: this.handleChange,
        "data-dot-style": state.color
      }, state.colors.map(function (f, i) {
        return /*#__PURE__*/react.createElement("option", {
          style: {
            background: 'linear-gradient(to right , ' + f.value + ' 20%, #ffffff 20%)'
          },
          className: 'xm-input-color-' + f.value,
          key: i,
          value: f.value
        }, f.label);
      }))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap text-center xm-input-sm"
      }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Approx. Width: "), state.value !== '' && state.height !== '' ? state.width.toFixed(2) + '"' : 'Enter text and select a Height to see Approx. Width.')), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap xm-input-sm"
      }, /*#__PURE__*/react.createElement("p", null, /*#__PURE__*/react.createElement("strong", null, "Total Letter Count: "), state.value.replace(/\s/g, '').length)), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap xm-input-full"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "connect",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Letter Connect")), /*#__PURE__*/react.createElement("select", {
        name: "connect",
        id: "connect",
        onChange: this.handleChange,
        value: state.connect
      }, /*#__PURE__*/react.createElement("option", {
        value: ""
      }, "-- Please Select --"), /*#__PURE__*/react.createElement("option", {
        value: "shown",
        price: "0"
      }, "As Shown "), /*#__PURE__*/react.createElement("option", {
        value: "connect",
        price: "0"
      }, "Each Word Connected "), /*#__PURE__*/react.createElement("option", {
        value: "individual",
        price: "0"
      }, "Individual Letters "))), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-wrap"
      }, /*#__PURE__*/react.createElement("div", {
        className: "xm-input-frag"
      }, "Starting At: $", (0.59 * (this.state.value.replace(/\s/g, '').length > 0 ? this.state.value.replace(/\s/g, '').length : 1) * (state.quantity > 0 ? state.quantity : 1)).toFixed(2)), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-frag"
      }, /*#__PURE__*/react.createElement("label", {
        htmlFor: "quantity",
        className: "text-right"
      }, /*#__PURE__*/react.createElement("strong", null, "Qty")), /*#__PURE__*/react.createElement("input", {
        type: "number",
        name: "quantity",
        value: state.quantity,
        onChange: this.handleChange,
        placeholder: 'Enter your size'
      })), /*#__PURE__*/react.createElement("div", {
        className: "xm-input-frag"
      }, /*#__PURE__*/react.createElement("input", {
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
}(react.Component);
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


  ReactDOM.render( /*#__PURE__*/react.createElement(LetterifyEl, {
    templateEl: templateEl,
    ajaxurl: ajaxurl,
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