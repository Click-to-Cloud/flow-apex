var pageComponent =
webpackJsonppageComponent([3],{

/***/ 306:
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

var _step_7Soy = __webpack_require__(307);

var _step_7Soy2 = _interopRequireDefault(_step_7Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KRpqB = function (_Component) {
  _inherits(KRpqB, _Component);

  function KRpqB() {
    _classCallCheck(this, KRpqB);

    return _possibleConstructorReturn(this, (KRpqB.__proto__ || Object.getPrototypeOf(KRpqB)).apply(this, arguments));
  }

  return KRpqB;
}(_metalComponent2.default);

;

_metalSoy2.default.register(KRpqB, _step_7Soy2.default);

exports.default = KRpqB;

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.KRpqB = undefined;

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

  // This file was automatically generated from step_7.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace KRpqB.
   * @public
   */

  goog.module('KRpqB.incrementaldom');

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
    var param843 = function param843() {
      ie_open('h2');
      var dyn45 = opt_data.page.title;
      if (typeof dyn45 == 'function') dyn45();else if (dyn45 != null) itext(dyn45);
      ie_close('h2');
      ie_open('p');
      ie_open('code');
      itext('returnXxx');
      ie_close('code');
      itext(' in Flow.apex only specifies what type of result is returned. To actually return something, call ');
      ie_open('code');
      itext('doReturn(Object)');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('doReturnRaw(Object)');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doReturn(0);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If no ');
      ie_open('code');
      itext('doReturn');
      ie_close('code');
      itext(' or equivalent is added, the Flow Func will return ');
      ie_open('code');
      itext('null');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('The difference between ');
      ie_open('code');
      itext('doReturn');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('doReturnRaw');
      ie_close('code');
      itext(' is that doReturn treats String as FlowScript while ');
      ie_open('code');
      itext('doReturnRaw');
      ie_close('code');
      itext(' does not.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doReturn(\'"message"\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('is equivalent to');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doReturnRaw(\'message\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param843 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'KRpqB.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var KRpqB = function (_Component) {
  _inherits(KRpqB, _Component);

  function KRpqB() {
    _classCallCheck(this, KRpqB);

    return _possibleConstructorReturn(this, (KRpqB.__proto__ || Object.getPrototypeOf(KRpqB)).apply(this, arguments));
  }

  return KRpqB;
}(_metalComponent2.default);

_metalSoy2.default.register(KRpqB, templates);
exports.KRpqB = KRpqB;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[306]);