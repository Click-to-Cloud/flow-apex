var pageComponent =
webpackJsonppageComponent([24],{

/***/ 270:
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

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NhfqY = function (_Component) {
  _inherits(NhfqY, _Component);

  function NhfqY() {
    _classCallCheck(this, NhfqY);

    return _possibleConstructorReturn(this, (NhfqY.__proto__ || Object.getPrototypeOf(NhfqY)).apply(this, arguments));
  }

  return NhfqY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(NhfqY, _indexSoy2.default);

exports.default = NhfqY;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.NhfqY = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace NhfqY.
   * @public
   */

  goog.module('NhfqY.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

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
    var param596 = function param596() {
      ie_open('h6');
      var dyn33 = opt_data.page.description;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is FlowScript?');
      ie_close('h2');
      ie_open('p');
      itext('FlowScript is a small scripting language packaged with Flow.apex. FlowScript is used to convert javascript-like scripts into Flow.apex code.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How does FlowScript work?');
      ie_close('h2');
      ie_open('p');
      itext('FlowScript bascially is just an interpreter from a more readable script to Flow.apex code.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'n = n + 1\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This embedded FlowScript is then translated into this:');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'n\', Flow.s(\'n + 1\'));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('Flow.s(String)');
      ie_close('code');
      itext(' is a tool used to convert Strings into deferred Flow.apex code invocations. It eventually translates the script into:');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'n\', Flow.call(R.add.apply(1), Flow.getVar(\'n\')));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The purpose of FlowScript is to make the code easier to read, and fundamentally it does not change the code logic.');
      ie_close('p');
      ie_open('p');
      itext('The interpretation of FlowScript happens only once when the Flow is created. Therefore further performance penalty is avoided.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('FlowScript Evaluation');
      ie_close('h2');
      ie_open('p');
      itext('We can evaluate FlowScript independently from Flow.apex.');
      ie_close('p');
      $templateAlias2({ code: 'Object value = Flow.eval(\'add(a, b)\', new Map<String, Object>{\n    \'a\' => 1,\n    \'b\' => 2\n});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('FlowScript Syntax');
      ie_close('h2');
      ie_open('p');
      itext('FlowScript follows most of JavaScript syntax, with these exceptions:');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Functions instead of methods FlowScript supports only functions like ');
      ie_open('code');
      itext('add(1, 2)');
      ie_close('code');
      itext(', not ');
      ie_open('code');
      itext('a.add(1, 2)');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Reference of ');
      ie_open('code');
      itext('this');
      ie_close('code');
      itext('In FlowScript, ');
      ie_open('code');
      itext('this');
      ie_close('code');
      itext(' always refers to the current Flow object.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('Supported Unary Operators');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Negate the number');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!');
      ie_close('td');
      ie_open('td');
      itext('Negate the boolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('++(prefixed)');
      ie_close('td');
      ie_open('td');
      itext('Increment the number');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('--(prefixed)');
      ie_close('td');
      ie_open('td');
      itext('Decrement the number');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Binary Operators');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('==');
      ie_close('td');
      ie_open('td');
      itext('Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('!=');
      ie_close('td');
      ie_open('td');
      itext('Not Equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<');
      ie_close('td');
      ie_open('td');
      itext('Less than');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>');
      ie_close('td');
      ie_open('td');
      itext('Greater than');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('<=');
      ie_close('td');
      ie_open('td');
      itext('Less than or equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('>=');
      ie_close('td');
      ie_open('td');
      itext('Greater than or equals');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('+');
      ie_close('td');
      ie_open('td');
      itext('Add');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('-');
      ie_close('td');
      ie_open('td');
      itext('Minus');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('*');
      ie_close('td');
      ie_open('td');
      itext('Multiply');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('/');
      ie_close('td');
      ie_open('td');
      itext('Divide');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('%');
      ie_close('td');
      ie_open('td');
      itext('Modulo');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Logical Operators');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('!');
      ie_close('td');
      ie_open('td');
      itext('Negate the boolean');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('&&');
      ie_close('td');
      ie_open('td');
      itext('Logical And');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_open('td');
      itext('\\');
      ie_close('td');
      ie_void('td');
      ie_open('td');
      itext('Logical Or');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Supported Ternary Operators');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Operator');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('? :');
      ie_close('td');
      ie_open('td');
      itext('If ... then ... else ...');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Array Literal');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'a = ["a", "b"]\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Map Literal');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'a = { "name" => "value" }\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param596 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'NhfqY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var NhfqY = function (_Component) {
  _inherits(NhfqY, _Component);

  function NhfqY() {
    _classCallCheck(this, NhfqY);

    return _possibleConstructorReturn(this, (NhfqY.__proto__ || Object.getPrototypeOf(NhfqY)).apply(this, arguments));
  }

  return NhfqY;
}(_metalComponent2.default);

_metalSoy2.default.register(NhfqY, templates);
exports.NhfqY = NhfqY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);