var pageComponent =
webpackJsonppageComponent([19],{

/***/ 280:
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

var _staticSoy = __webpack_require__(281);

var _staticSoy2 = _interopRequireDefault(_staticSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var qYgbN = function (_Component) {
  _inherits(qYgbN, _Component);

  function qYgbN() {
    _classCallCheck(this, qYgbN);

    return _possibleConstructorReturn(this, (qYgbN.__proto__ || Object.getPrototypeOf(qYgbN)).apply(this, arguments));
  }

  return qYgbN;
}(_metalComponent2.default);

;

_metalSoy2.default.register(qYgbN, _staticSoy2.default);

exports.default = qYgbN;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.qYgbN = undefined;

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

  // This file was automatically generated from static.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace qYgbN.
   * @public
   */

  goog.module('qYgbN.incrementaldom');

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
    var param545 = function param545() {
      ie_open('h6');
      var dyn32 = opt_data.page.description;
      if (typeof dyn32 == 'function') dyn32();else if (dyn32 != null) itext(dyn32);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      ie_open('code');
      itext('this');
      ie_close('code');
      itext(' Placeholder');
      ie_close('h2');
      ie_open('p');
      itext('Flow.apex has a placeholder for the current Flow, and it is ');
      ie_open('code');
      itext('Flow.self');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n     .inputAs(\'n\').returnInteger()\n     .doIf(\n         Flow.call(R.equals.apply(0), Flow.getVar(\'n\')),\n         Flow.block()\n             .doReturn(0)\n     )\n     .var(\'ret\', Flow.call(R.add.apply(2), Flow.call(Flow.self, Flow.call(R.dec, Flow.getVar(\'n\')))))\n     .doReturn(Flow.getVar(\'ret\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('FlowScript Interpretation');
      ie_close('h2');
      ie_open('p');
      itext('Using ');
      ie_open('code');
      itext('Flow.s(String)');
      ie_close('code');
      itext(', we can convert Strings into Flow.apex invocations.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    var(\'n\', Flow.s(\'i\'));', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('FlowScript Evaluation');
      ie_close('h2');
      ie_open('p');
      itext('We can evaluate the FlowScript independently from Flows.');
      ie_close('p');
      $templateAlias2({ code: 'Object result = Flow.eval(\'add(1, 2)\');', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('FlowScript Evaluation');
      ie_close('h2');
      ie_open('p');
      itext('We can evaluate the FlowScript independently from Flows.');
      ie_close('p');
      $templateAlias2({ code: 'Object result = Flow.eval(\'add(1, 2)\');', mode: 'javascript' }, null, opt_ijData);
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
      itext('eval(String)');
      ie_close('td');
      ie_open('td');
      itext('Evaluate without context');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('eval(String, Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Evaluate with context');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Block Creation');
      ie_close('h2');
      ie_open('p');
      itext('We can create a block like this:');
      ie_close('p');
      $templateAlias2({ code: 'Block b = Flow.block();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Get Variable');
      ie_close('h2');
      ie_open('p');
      itext('This is how we get the variable value.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'n\', Flow.getVar(\'a\'));\n// Get the value of \'a\' and set it to \'n\'', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Call Functions');
      ie_close('h2');
      ie_open('p');
      itext('This is how we call functions.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'ret\', Flow.call(R.constant.apply(\'a\')));\n// Set value \'a\' to \'ret\', by calling a \'constant\' Func that always returns the value it has received', mode: 'javascript' }, null, opt_ijData);
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
      itext('call(Func)');
      ie_close('td');
      ie_open('td');
      itext('Call the Func with no arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('call(Func, Object)');
      ie_close('td');
      ie_open('td');
      itext('Call the Func with one argument');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('call(Func, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Call the Func with two arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('call(Func, Object, Object)');
      ie_close('td');
      ie_open('td');
      itext('Call the Func with three arguments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('call(Func, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('Call the Func with a list of arguments');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Add Custom Funcs');
      ie_close('h2');
      ie_open('p');
      itext('We can add custom Funcs like this:');
      ie_close('p');
      $templateAlias2({ code: 'Flow.addFuncs(new Map<String, Func>{ \'plus\' => R.add });\n\nFlow f = new Flow()\n    .doReturn(\'plus(1, 2)\');', mode: 'javascript' }, null, opt_ijData);
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
      itext('addFuncs(Map<String, Func>)');
      ie_close('td');
      ie_open('td');
      itext('Add a map of Funcs');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('addFunc(String, Func)');
      ie_close('td');
      ie_open('td');
      itext('Add Func with the name');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('removeAllFuncs()');
      ie_close('td');
      ie_open('td');
      itext('Remove all the Funcs');
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
    $templateAlias1(soy.$$assignDefaults({ content: param545 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'qYgbN.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var qYgbN = function (_Component) {
  _inherits(qYgbN, _Component);

  function qYgbN() {
    _classCallCheck(this, qYgbN);

    return _possibleConstructorReturn(this, (qYgbN.__proto__ || Object.getPrototypeOf(qYgbN)).apply(this, arguments));
  }

  return qYgbN;
}(_metalComponent2.default);

_metalSoy2.default.register(qYgbN, templates);
exports.qYgbN = qYgbN;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);