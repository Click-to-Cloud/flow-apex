var pageComponent =
webpackJsonppageComponent([1],{

/***/ 310:
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

var _step_9Soy = __webpack_require__(311);

var _step_9Soy2 = _interopRequireDefault(_step_9Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var XYldQ = function (_Component) {
  _inherits(XYldQ, _Component);

  function XYldQ() {
    _classCallCheck(this, XYldQ);

    return _possibleConstructorReturn(this, (XYldQ.__proto__ || Object.getPrototypeOf(XYldQ)).apply(this, arguments));
  }

  return XYldQ;
}(_metalComponent2.default);

;

_metalSoy2.default.register(XYldQ, _step_9Soy2.default);

exports.default = XYldQ;

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.XYldQ = undefined;

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

  // This file was automatically generated from step_9.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace XYldQ.
   * @public
   */

  goog.module('XYldQ.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param895 = function param895() {
      ie_open('h2');
      var dyn47 = opt_data.page.title;
      if (typeof dyn47 == 'function') dyn47();else if (dyn47 != null) itext(dyn47);
      ie_close('h2');
      ie_open('p');
      itext('We support two types of ');
      ie_open('code');
      itext('for');
      ie_close('code');
      itext(' blocks in Flow.apex.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doFor(\'i = 0; i < 10; i = i + 1\', Flow.block()\n        .var(\'output = debug(i)\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doFor(\'i in range(0, 10)\', Flow.block()\n        .var(\'output = debug(i)\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param895 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'XYldQ.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var XYldQ = function (_Component) {
  _inherits(XYldQ, _Component);

  function XYldQ() {
    _classCallCheck(this, XYldQ);

    return _possibleConstructorReturn(this, (XYldQ.__proto__ || Object.getPrototypeOf(XYldQ)).apply(this, arguments));
  }

  return XYldQ;
}(_metalComponent2.default);

_metalSoy2.default.register(XYldQ, templates);
exports.XYldQ = XYldQ;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[310]);