var pageComponent =
webpackJsonppageComponent([21],{

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

var _functionSoy = __webpack_require__(277);

var _functionSoy2 = _interopRequireDefault(_functionSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RjqGM = function (_Component) {
  _inherits(RjqGM, _Component);

  function RjqGM() {
    _classCallCheck(this, RjqGM);

    return _possibleConstructorReturn(this, (RjqGM.__proto__ || Object.getPrototypeOf(RjqGM)).apply(this, arguments));
  }

  return RjqGM;
}(_metalComponent2.default);

;

_metalSoy2.default.register(RjqGM, _functionSoy2.default);

exports.default = RjqGM;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.RjqGM = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from function.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace RjqGM.
   * @public
   */

  goog.module('RjqGM.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param559 = function param559() {
      ie_open('h6');
      var dyn31 = opt_data.page.description;
      if (typeof dyn31 == 'function') dyn31();else if (dyn31 != null) itext(dyn31);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Func Arguments');
      ie_close('h2');
      ie_open('p');
      itext('These methods specify the arguments of the Flow Func.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(String)');
      ie_close('td');
      ie_open('td');
      itext('Rename first argument');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(String, String)');
      ie_close('td');
      ie_open('td');
      itext('Rename first two arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(String, String, String)');
      ie_close('td');
      ie_open('td');
      itext('Rename first three arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('inputAs(List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Rename the givne arguments');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Func Return Type');
      ie_close('h2');
      ie_open('p');
      itext('These methods specify the return type of the Flow Func.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('returnObject(Type)');
      ie_close('td');
      ie_open('td');
      itext('Specify the return type');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnObject()');
      ie_close('td');
      ie_open('td');
      itext('Return Object');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnBoolean()');
      ie_close('td');
      ie_open('td');
      itext('Return Boolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnInteger()');
      ie_close('td');
      ie_open('td');
      itext('Return Integer');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnLong()');
      ie_close('td');
      ie_open('td');
      itext('Return Long');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnDouble()');
      ie_close('td');
      ie_open('td');
      itext('Return Double');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnDecimal()');
      ie_close('td');
      ie_open('td');
      itext('Return Decimal');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnString()');
      ie_close('td');
      ie_open('td');
      itext('Return String');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnList()');
      ie_close('td');
      ie_open('td');
      itext('Return List<Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnSet()');
      ie_close('td');
      ie_open('td');
      itext('Return Set<String>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnMap()');
      ie_close('td');
      ie_open('td');
      itext('Return Map<String, Object>');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnSObject()');
      ie_close('td');
      ie_open('td');
      itext('Return SObject');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnDate()');
      ie_close('td');
      ie_open('td');
      itext('Return Date');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnTime()');
      ie_close('td');
      ie_open('td');
      itext('Return Time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnDatetime()');
      ie_close('td');
      ie_open('td');
      itext('Return Datetime');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('returnFunc()');
      ie_close('td');
      ie_open('td');
      itext('Return Func');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Func Do Return');
      ie_close('h2');
      ie_open('p');
      itext('These methods return a value from the Flow Func.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('doReturn(Object)');
      ie_close('td');
      ie_open('td');
      itext('Return the value, treating Strings as FlowScript');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doReturnRaw(Object)');
      ie_close('td');
      ie_open('td');
      itext('Return the value, treating Strings as raw');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Func Trigger');
      ie_close('h2');
      ie_open('p');
      itext('These methods trigger the Flow Func to run.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('run(...)');
      ie_close('td');
      ie_open('td');
      itext('Run the Func with the arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('runN(List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Run the Func with the list of arguments');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param559 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'RjqGM.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var RjqGM = function (_Component) {
  _inherits(RjqGM, _Component);

  function RjqGM() {
    _classCallCheck(this, RjqGM);

    return _possibleConstructorReturn(this, (RjqGM.__proto__ || Object.getPrototypeOf(RjqGM)).apply(this, arguments));
  }

  return RjqGM;
}(_metalComponent2.default);

_metalSoy2.default.register(RjqGM, templates);
exports.RjqGM = RjqGM;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[276]);