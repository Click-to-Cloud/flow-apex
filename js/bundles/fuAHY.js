var pageComponent =
webpackJsonppageComponent([25],{

/***/ 268:
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

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fuAHY = function (_Component) {
  _inherits(fuAHY, _Component);

  function fuAHY() {
    _classCallCheck(this, fuAHY);

    return _possibleConstructorReturn(this, (fuAHY.__proto__ || Object.getPrototypeOf(fuAHY)).apply(this, arguments));
  }

  return fuAHY;
}(_metalComponent2.default);

;

_metalSoy2.default.register(fuAHY, _indexSoy2.default);

exports.default = fuAHY;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.fuAHY = undefined;

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
   * @fileoverview Templates in namespace fuAHY.
   * @public
   */

  goog.module('fuAHY.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('What is a Flow?');
      ie_close('h2');
      ie_open('p');
      itext('A Flow is a Func that is created in a procedural way by weaving other Funcs.');
      ie_close('p');
      ie_open('p');
      itext('According to ');
      ie_open('a', null, null, 'href', 'https://github.com/Click-to-Cloud/R.apex');
      itext('R.apex');
      ie_close('a');
      itext(', we normally have two ways to create a Func.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Func Composition An example of this is below:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Func notEqBy3 = (Func)R.complement.run(R.equals.apply(3));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this way, we compose a large Func out of small Funcs. This more functional way of creating Funcs is limited by the number of existing Funcs that we can use, and the complexity of composing them. Basically, it works perfectly for small and simple functions, but not so good with large and complicated functions.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Func Inheritance Another way of creating a Func is by subclassing ');
      ie_open('code');
      itext('Func');
      ie_close('code');
      itext('.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'public class CustomFunc extends Func {\n    public CustomFunc() {\n        super(1);\n    }\n\n    public override Object exec(Object arg) {\n        // Custom logic here\n        return ...;\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('We write our same old logic here in the custom Func, and wraps our complex code in a custom Func. The issue, however, is that creating custom Funcs all the time is quite heavy. We kind of miss the adorable composing abilities from the first approach.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Flow Funcs So here comes Flow.apex for the rescue.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Func f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .var(\'sum = a + b\')\n    .doReturn(\'sum\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Flows, subclassing from ');
      ie_open('code');
      itext('Func');
      ie_close('code');
      itext(', come with another style of functional composition, the procedural style of functional chaining.');
      ie_close('p');
      ie_open('p');
      itext('The intention of Flow.apex is not to promote procedural programming camouflaged in functional programming. Instead, it is just a bridge between the pure functional way and the pure procedural way, trying to glue the Funcs to create the ultimate complex monster by utilizing a little power of both. So the takeaway is to try to keep your Flow logic as simple as possible, and reuse as many Funcs as possible.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Flow Concepts');
      ie_close('h2');
      ie_open('p');
      itext('Before we dive in, we need to clarify several concepts.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Flow A Flow is an object of type ');
      ie_open('code');
      itext('Flow');
      ie_close('code');
      itext(', and it is a ');
      ie_open('code');
      itext('Func');
      ie_close('code');
      itext('. A Flow is a ');
      ie_open('code');
      itext('Block');
      ie_close('code');
      itext(' decorated with arguments and return types.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Block A Block is a group of executable codes. A flow is backed by a block. A block contains a list of statements.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Statement A Statement is a line of executable code, usually grouped in a block.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Flows');
      ie_close('h2');
      ie_open('p');
      itext('Flows are just custom Funcs in a more declarative way. Apex in Salesforce does not support anonymous inner classes, and that makes it hard to dynamically create Funcs. Flow.apex is just a workaround to make that less painful.');
      ie_close('p');
      ie_open('p');
      itext('Flows are just blocks of executable codes. Normally, flows can be used in one of the two forms.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Flow as a Func A Func takes arguments, returns values and possibly has a name. This is where flows are like Funcs.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow(\'sum\')\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doReturn(\'a + b\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This Flow Func is equivalent to the following function:');
      ie_close('p');
      $templateAlias2({ code: 'Integer sum(Integer a, Integer b);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('And it works just like a ');
      ie_open('code');
      itext('sum');
      ie_close('code');
      itext(' Func.');
      ie_close('p');
      $templateAlias2({ code: 'Object result = f.run(1, 2); // 3', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Flow as a Block Blocks are the internal implementations of flows. And naturally flows expose the behavior of blocks.');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('A block is a group of code that operates on a set of variables.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum = a + b\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Blocks do not need any arguments, or return values. All they need is a set of variables to work on.');
      ie_close('p');
      $templateAlias2({ code: 'Map<String, Object> result = (Map<String, Object>)f.execute(new Map<String, Object>{\n    \'a\' => 1,\n    \'b\' => 2,\n    \'sum\' => null\n});', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Flow Funcs');
      ie_close('h2');
      ie_open('p');
      itext('Here are the factors we need take into consideration when we define a Flow Func.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Func Parameters We need to give meaningful Func parameter names, although Func parameters always have type as Object.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we define a Flow Func that takes parameter ');
      ie_open('code');
      itext('a');
      ie_close('code');
      itext(' and parameter ');
      ie_open('code');
      itext('b');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Func Return Type We can also specify the return type of the Flow Func, though not required.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('returnInteger()');
      ie_close('code');
      itext(' indicates that this Flow Func returns an ');
      ie_open('code');
      itext('Integer');
      ie_close('code');
      itext(', and when we do the ');
      ie_open('code');
      itext('doReturn');
      ie_close('code');
      itext(', Flow.apex will try to convert the returning value to the return type we have previously declared.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('Func Name Again, Flow name is not required.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow(\'f\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('The only benefit of declaring a Flow Func with a name is to add this Flow Func to the Flow APIs(used in FlowScript) for you, which you can do it by yourself later.');
      ie_close('p');
      $templateAlias2({ code: 'Flow.addFunc(\'f\', f);', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Do the Return We return the value by calling ');
      ie_open('code');
      itext('doReturn');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('doReturnRaw');
      ie_close('code');
      itext('. The difference is subtle:');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .doReturn(\'"message"\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('v.s');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .doReturnRaw(\'message\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('code');
      itext('doReturn');
      ie_close('code');
      itext(' will try to treat your String as FlowScripts, while ');
      ie_open('code');
      itext('doReturnRaw');
      ie_close('code');
      itext(' will not.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Blocks');
      ie_close('h2');
      ie_open('p');
      itext('We can create blocks by calling ');
      ie_open('code');
      itext('Flow.block()');
      ie_close('code');
      itext('.');
      ie_close('p');
      $templateAlias2({ code: 'Flow.block()\n    .var(\'name = "Wilson"\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Blocks own their statements and local variables, and can mutate global variables to share information with outside of the blocks.');
      ie_close('p');
      ie_open('p');
      itext('Blocks are seldom used standalone. Instead, they are mostly used combined with various controlling structures.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Deferred Execution');
      ie_close('h2');
      ie_open('p');
      itext('Each statement in a block encapsulates a deferred execution of code.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum = a + b\');\n\nf.execute(...);', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Statements are not executed until ');
      ie_open('code');
      itext('execute');
      ie_close('code');
      itext(' or ');
      ie_open('code');
      itext('run');
      ie_close('code');
      itext(' is called on ');
      ie_open('code');
      itext('Func');
      ie_close('code');
      itext(', or ');
      ie_open('code');
      itext('execute');
      ie_close('code');
      itext(' is called on ');
      ie_open('code');
      itext('Block');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '7');
      ie_open('h2');
      itext('Variables');
      ie_close('h2');
      ie_open('p');
      itext('Variables are ubiquitous in flows, and they act as the carriers of data. We can access the variable values like this:');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'b\', Flow.getVar(\'a\'));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here we get the value of ');
      ie_open('code');
      itext('a');
      ie_close('code');
      itext(' by calling ');
      ie_open('code');
      itext('Flow.getVar(String)');
      ie_close('code');
      itext(', and set it to another variable by calling ');
      ie_open('code');
      itext('var(String, Object)');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('Variables in Flow.apex have scopes.');
      ie_close('p');
      ie_open('p');
      itext('In terms of scopes, variables are divided into global variables and local variables in a block.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      ie_open('p');
      itext('Global variables Global variables are passed in to the block from outside. Blocks can mutate the values of global variables, but can never add or remove global variables.');
      ie_close('p');
      ie_close('li');
      ie_open('li');
      ie_open('p');
      itext('Local variables Local variables are created inside the block. The blocks are responsible for managing the lifecycle of the local variables. Local variables are ');
      ie_open('strong');
      itext('NOT');
      ie_close('strong');
      itext(' visible to outside of the block.');
      ie_close('p');
      ie_close('li');
      ie_close('ul');
      ie_open('p');
      itext('The global variables and the local variables share the names. That means we cannot have variables with duplicate names in the same block. A variable can either be global or local, and there is no variable overridden in Flow.apex. That is to say, if we have code like this,');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum = a + b\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('If the Flow accepts ');
      ie_open('code');
      itext('sum');
      ie_close('code');
      itext(' from the outside variables, it will use it as a global variable and set its value. Otherwise it will create a local variable and set its value. It will not create a local variable with the same name as the global variable, and override it.');
      ie_close('p');
      ie_open('p');
      itext('We can print the debugging information of all the variables in the current block.');
      ie_close('p');
      $templateAlias2({ code: 'Flow.block()\n    .debug();', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '8');
      ie_open('h2');
      itext('Functions');
      ie_close('h2');
      ie_open('p');
      itext('Flows actually weave Funcs into a complex Func. It\'s just that we have not noticed that.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum = concat(a, b)\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this Flow, ');
      ie_open('code');
      itext('R.concat');
      ie_close('code');
      itext(' is called with ');
      ie_open('code');
      itext('a');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('b');
      ie_close('code');
      itext('. This is the same as below:');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum\', Flow.call(R.concat, Flow.getVar(\'a\'), Flow.getVar(\'b\')));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This snippet is more cumbersome, but clearly explains the Func-invoking thing here.');
      ie_close('p');
      ie_open('p');
      itext('All Funcs from R.apex have already been imported to Flow.apex, and you can freely use them.');
      ie_close('p');
      ie_open('p');
      itext('In order to import your own Funcs, do this:');
      ie_close('p');
      $templateAlias2({ code: 'Flow.addFunc(\'customFunc\', new CustomFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Make sure you import the Funcs you need before you actually use them.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '9');
      ie_open('h2');
      itext('Functions');
      ie_close('h2');
      ie_open('p');
      itext('Flows actually weave Funcs into a complex Func. It\'s just that we have not noticed that.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum = concat(a, b)\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('In this Flow, ');
      ie_open('code');
      itext('R.concat');
      ie_close('code');
      itext(' is called with ');
      ie_open('code');
      itext('a');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('b');
      ie_close('code');
      itext('. This is the same as below:');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .var(\'sum\', Flow.call(R.concat, Flow.getVar(\'a\'), Flow.getVar(\'b\')));', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('This snippet is more cumbersome, but clearly explains the Func-invoking thing here.');
      ie_close('p');
      ie_open('p');
      itext('All Funcs from R.apex have already been imported to Flow.apex, and you can freely use them.');
      ie_close('p');
      ie_open('p');
      itext('In order to import your own Funcs, do this:');
      ie_close('p');
      $templateAlias2({ code: 'Flow.addFunc(\'customFunc\', new CustomFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Make sure you import the Funcs you need before you actually use them.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '10');
      ie_open('h2');
      itext('Branch Control');
      ie_close('h2');
      ie_open('p');
      itext('Flow.apex offers branch control with ');
      ie_open('code');
      itext('if');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('switch');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('If Statement We have ');
      ie_open('code');
      itext('if');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('if not');
      ie_close('code');
      itext(', and we can append ');
      ie_open('code');
      itext('else');
      ie_close('code');
      itext(' blocks.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doIf(\n        \'a == 1\',\n        Flow.block().doReturn(1)\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doIf(\n        \'a == 1\',\n        Flow.block().doReturn(1),\n        Flow.block().doReturn(2)\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('Switch Statement We have ');
      ie_open('code');
      itext('switch');
      ie_close('code');
      itext(' to handle multiple branching cases.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .var(\'word = "a"\')\n    .doSwitch(\'word\', new List<Object>{\n        \'a\', Flow.block().var(\'output = debug("Matched")\'),\n        \'b\', Flow.block().var(\'output = debug("Not Matched")\')\n    });', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Or we can have more complicated switching.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'n\').returnInteger()\n    .doSwitch(\'n\', new List<Object>{\n        Flow.s(\'n == 1\'), Flow.block().var(\'output = debug("Matched")\'),\n        Flow.s(\'n != 1\'), Flow.block().var(\'output = debug("Not Matched")\')\n    });', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here ');
      ie_open('code');
      itext('Flow.s(String)');
      ie_close('code');
      itext(' convert a String into a deferred condition check for ');
      ie_open('code');
      itext('swtich');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('article', null, null, 'id', '11');
      ie_open('h2');
      itext('Loop Control');
      ie_close('h2');
      ie_open('p');
      itext('Flow.apex has three types of loop control.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('For Loop Here is the normal ');
      ie_open('code');
      itext('for');
      ie_close('code');
      itext(' loop that we can use.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doFor(\'i = 0; i < 10; i = i + 1\', Flow.block()\n        .var(\'output = debug(i)\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Notice that here we use ');
      ie_open('code');
      itext('i = i + 1');
      ie_close('code');
      itext(', as ');
      ie_open('code');
      itext('i++');
      ie_close('code');
      itext(' is not supported in Flow.apex.');
      ie_close('p');
      ie_open('ul');
      ie_open('li');
      itext('For-In Loop We can also use ');
      ie_open('code');
      itext('for ... in');
      ie_close('code');
      itext(' like structure.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .doFor(\'i in range(0, 10)\', Flow.block()\n        .var(\'output = debug(i)\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('ul');
      ie_open('li');
      itext('While Loop We support the use of ');
      ie_open('code');
      itext('while');
      ie_close('code');
      itext('.');
      ie_close('li');
      ie_close('ul');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .var(\'i = 0\')\n    .doWhile(\'i < 10\', Flow.block()\n        .var(\'output = debug(i)\')\n        .var(\'i = i + 1\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('To better control the loops, we have ');
      ie_open('code');
      itext('break');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('continue');
      ie_close('code');
      itext(' available.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'a\', \'b\').returnInteger()\n    .var(\'i = 0\')\n    .doWhile(\'i < 10\', Flow.block()\n        .doIf(\'i == 3\', Flow.block()\n            .doBreak()\n        )\n        .var(\'output = debug(i)\')\n        .var(\'i = i + 1\')\n    );', mode: 'javascript' }, null, opt_ijData);
      ie_close('article');
      ie_open('article', null, null, 'id', '12');
      ie_open('h2');
      itext('Recursion');
      ie_close('h2');
      ie_open('p');
      itext('We can easily achieve recursion in Flow.apex.');
      ie_close('p');
      $templateAlias2({ code: 'Flow f = new Flow()\n    .inputAs(\'n\').returnInteger()\n    .doIf(\n        \'n == 0\',\n        Flow.block()\n            .doReturn(0)\n    )\n    .var(\'ret = 2 + this(n - 1)\')\n    .doReturn(\'ret\');', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Here ');
      ie_open('code');
      itext('this(n - 1)');
      ie_close('code');
      itext(' is calling Flow ');
      ie_open('code');
      itext('f');
      ie_close('code');
      itext(', with argument ');
      ie_open('code');
      itext('n - 1');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'fuAHY.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var fuAHY = function (_Component) {
  _inherits(fuAHY, _Component);

  function fuAHY() {
    _classCallCheck(this, fuAHY);

    return _possibleConstructorReturn(this, (fuAHY.__proto__ || Object.getPrototypeOf(fuAHY)).apply(this, arguments));
  }

  return fuAHY;
}(_metalComponent2.default);

_metalSoy2.default.register(fuAHY, templates);
exports.fuAHY = fuAHY;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);