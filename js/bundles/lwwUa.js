var pageComponent =
webpackJsonppageComponent([22],{

/***/ 274:
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

var _creationSoy = __webpack_require__(275);

var _creationSoy2 = _interopRequireDefault(_creationSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var lwwUa = function (_Component) {
  _inherits(lwwUa, _Component);

  function lwwUa() {
    _classCallCheck(this, lwwUa);

    return _possibleConstructorReturn(this, (lwwUa.__proto__ || Object.getPrototypeOf(lwwUa)).apply(this, arguments));
  }

  return lwwUa;
}(_metalComponent2.default);

;

_metalSoy2.default.register(lwwUa, _creationSoy2.default);

exports.default = lwwUa;

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.lwwUa = undefined;

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

  // This file was automatically generated from creation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace lwwUa.
   * @public
   */

  goog.module('lwwUa.incrementaldom');

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
    var param507 = function param507() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Constructors');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Flow()');
      ie_close('td');
      ie_open('td');
      itext('Create a default Flow');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Flow(String)');
      ie_close('td');
      ie_open('td');
      itext('Create a Flow with the given name');
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
    $templateAlias1(soy.$$assignDefaults({ content: param507 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'lwwUa.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var lwwUa = function (_Component) {
  _inherits(lwwUa, _Component);

  function lwwUa() {
    _classCallCheck(this, lwwUa);

    return _possibleConstructorReturn(this, (lwwUa.__proto__ || Object.getPrototypeOf(lwwUa)).apply(this, arguments));
  }

  return lwwUa;
}(_metalComponent2.default);

_metalSoy2.default.register(lwwUa, templates);
exports.lwwUa = lwwUa;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[274]);