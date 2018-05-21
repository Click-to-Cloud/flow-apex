var pageComponent =
webpackJsonppageComponent([23],{

/***/ 272:
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

var _blockSoy = __webpack_require__(273);

var _blockSoy2 = _interopRequireDefault(_blockSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var yasYc = function (_Component) {
  _inherits(yasYc, _Component);

  function yasYc() {
    _classCallCheck(this, yasYc);

    return _possibleConstructorReturn(this, (yasYc.__proto__ || Object.getPrototypeOf(yasYc)).apply(this, arguments));
  }

  return yasYc;
}(_metalComponent2.default);

;

_metalSoy2.default.register(yasYc, _blockSoy2.default);

exports.default = yasYc;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.yasYc = undefined;

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

  // This file was automatically generated from block.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace yasYc.
   * @public
   */

  goog.module('yasYc.incrementaldom');

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
    var param496 = function param496() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Block Trigger');
      ie_close('h2');
      ie_open('p');
      itext('These methods trigger the block to run.');
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
      itext('execute(Map<String, Object>)');
      ie_close('td');
      ie_open('td');
      itext('Execute the block with the variables');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Assign Variables');
      ie_close('h2');
      ie_open('p');
      itext('These methods assign the variable values.');
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
      itext('var(String)');
      ie_close('td');
      ie_open('td');
      itext('Run the simplified assignment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('var(String, Object)');
      ie_close('td');
      ie_open('td');
      itext('Assign the value to the variable with the name');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('If Control');
      ie_close('h2');
      ie_open('p');
      itext('These methods do the ');
      ie_open('code');
      itext('if');
      ie_close('code');
      itext(' control.');
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
      itext('doIf(Object, Block)');
      ie_close('td');
      ie_open('td');
      itext('If ... then ...');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doIf(Object, Block, Block)');
      ie_close('td');
      ie_open('td');
      itext('If ... then ... else ...');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doIfNot(Object, Block, Block)');
      ie_close('td');
      ie_open('td');
      itext('If not ... then ... else ...');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doIfNot(Object, Block)');
      ie_close('td');
      ie_open('td');
      itext('If not ... then ...');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('For Control');
      ie_close('h2');
      ie_open('p');
      itext('These methods do the ');
      ie_open('code');
      itext('for');
      ie_close('code');
      itext(' control.');
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
      itext('doFor(String, Object, Object, Object, Block)');
      ie_close('td');
      ie_open('td');
      itext('for i = 0; i != 10; i = i + 1 loop');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doFor(String, Object, Block)');
      ie_close('td');
      ie_open('td');
      itext('for ... in loop');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doFor(String, Block)');
      ie_close('td');
      ie_open('td');
      itext('Simplified for loop statement');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('While Control');
      ie_close('h2');
      ie_open('p');
      itext('These methods do the ');
      ie_open('code');
      itext('while');
      ie_close('code');
      itext(' control.');
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
      itext('doWhile(Object, Block)');
      ie_close('td');
      ie_open('td');
      itext('while ..., do ...');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Switch Control');
      ie_close('h2');
      ie_open('p');
      itext('These methods do the ');
      ie_open('code');
      itext('switch');
      ie_close('code');
      itext(' control.');
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
      itext('doSwitch(Object, List<Object>)');
      ie_close('td');
      ie_open('td');
      itext('switch ... case ...');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Break && Continue');
      ie_close('h2');
      ie_open('p');
      itext('These methods are useful in loop and switches.');
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
      itext('doBreak()');
      ie_close('td');
      ie_open('td');
      itext('Break');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('doContinue()');
      ie_close('td');
      ie_open('td');
      itext('Continue');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Debug');
      ie_close('h2');
      ie_open('p');
      itext('These methods are useful for debugging.');
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
      itext('debug()');
      ie_close('td');
      ie_open('td');
      itext('Print the variables in the current block');
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
    $templateAlias1(soy.$$assignDefaults({ content: param496 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'yasYc.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var yasYc = function (_Component) {
  _inherits(yasYc, _Component);

  function yasYc() {
    _classCallCheck(this, yasYc);

    return _possibleConstructorReturn(this, (yasYc.__proto__ || Object.getPrototypeOf(yasYc)).apply(this, arguments));
  }

  return yasYc;
}(_metalComponent2.default);

_metalSoy2.default.register(yasYc, templates);
exports.yasYc = yasYc;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);