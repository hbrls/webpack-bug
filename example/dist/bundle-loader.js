/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		10: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "chunk-" + ({"0":"comp9","1":"comp8","2":"comp7","3":"comp6","4":"comp5","5":"comp4","6":"comp3","7":"comp2","8":"comp1","9":"comp0"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(6);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __core;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _get = __webpack_require__(16);

var _get2 = _interopRequireDefault(_get);

var _MultiComp = __webpack_require__(4);

var _MultiComp2 = _interopRequireDefault(_MultiComp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      comp1: false,
      comp2: false,
      random: '',
      ajax: []
    };

    _this.toggle = _this.toggle.bind(_this);
    _this.load = _this.load.bind(_this);
    _this.ajax = _this.ajax.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'toggle',
    value: function toggle(key) {
      this.setState(_defineProperty({}, key, !this.state[key]));
    }
  }, {
    key: 'load',
    value: function load() {
      var random = 'comp' + Math.floor(Math.random() * 10);
      this.setState({ random: random });
    }
  }, {
    key: 'ajax',
    value: function ajax() {
      var _this2 = this;

      (0, _get2.default)('/api/components.json').then(function (_ref) {
        var data = _ref.data;
        var components = data.components;

        _this2.setState({ ajax: components });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          comp1 = _state.comp1,
          comp2 = _state.comp2,
          random = _state.random,
          ajax = _state.ajax;


      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 example' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', onClick: function onClick() {
                  return _this3.toggle('comp1');
                } },
              'toggle comp 1'
            ),
            _react2.default.createElement('br', null),
            comp1 && _react2.default.createElement(_MultiComp2.default, { name: 'comp1', klass: 'klass1' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 example' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', onClick: function onClick() {
                  return _this3.toggle('comp2');
                } },
              'toggle comp 2'
            ),
            _react2.default.createElement('br', null),
            comp2 && _react2.default.createElement(_MultiComp2.default, { name: 'comp2', klass: 'klass2' })
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 example' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', onClick: function onClick() {
                  return _this3.load();
                } },
              'load random: ',
              random
            ),
            random && _react2.default.createElement(_MultiComp2.default, { name: random })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6 example' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-default', onClick: function onClick() {
                  return _this3.ajax();
                } },
              'ajax'
            ),
            ajax.map(function (a, i) {
              return _react2.default.createElement(_MultiComp2.default, _extends({}, a, { key: i }));
            })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(15);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Comp = __webpack_require__(6);

var _Comp2 = _interopRequireDefault(_Comp);

var _Comp3 = __webpack_require__(7);

var _Comp4 = _interopRequireDefault(_Comp3);

var _Comp5 = __webpack_require__(8);

var _Comp6 = _interopRequireDefault(_Comp5);

var _Comp7 = __webpack_require__(9);

var _Comp8 = _interopRequireDefault(_Comp7);

var _Comp9 = __webpack_require__(10);

var _Comp10 = _interopRequireDefault(_Comp9);

var _Comp11 = __webpack_require__(11);

var _Comp12 = _interopRequireDefault(_Comp11);

var _Comp13 = __webpack_require__(12);

var _Comp14 = _interopRequireDefault(_Comp13);

var _Comp15 = __webpack_require__(13);

var _Comp16 = _interopRequireDefault(_Comp15);

var _Comp17 = __webpack_require__(14);

var _Comp18 = _interopRequireDefault(_Comp17);

var _Comp19 = __webpack_require__(15);

var _Comp20 = _interopRequireDefault(_Comp19);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LAZY_COMPONENTS = {
  'comp0': _Comp2.default,
  'comp1': _Comp4.default,
  'comp2': _Comp6.default,
  'comp3': _Comp8.default,
  'comp4': _Comp10.default,
  'comp5': _Comp12.default,
  'comp6': _Comp14.default,
  'comp7': _Comp16.default,
  'comp8': _Comp18.default,
  'comp9': _Comp20.default
};

var MultiComp = function (_Component) {
  _inherits(MultiComp, _Component);

  function MultiComp(props) {
    _classCallCheck(this, MultiComp);

    var _this = _possibleConstructorReturn(this, (MultiComp.__proto__ || Object.getPrototypeOf(MultiComp)).call(this, props));

    _this.state = {
      component: props.default || null
    };
    return _this;
  }

  _createClass(MultiComp, [{
    key: 'load',
    value: function load(name) {
      var _this2 = this;

      var lazy = LAZY_COMPONENTS[name];
      if (lazy) {
        lazy(function (loaded) {
          var Component = loaded.default;
          _this2.setState({ component: _react2.default.createElement(Component, _this2.props) });
        });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.load(this.props.name);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.name !== this.props.name) {
        this.load(nextProps.name);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.component;
    }
  }]);

  return MultiComp;
}(_react.Component);

exports.default = MultiComp;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.querySelector('.App'));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(9).then((function(require) {
		cb(__webpack_require__(17));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(8).then((function(require) {
		cb(__webpack_require__(18));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(7).then((function(require) {
		cb(__webpack_require__(19));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(6).then((function(require) {
		cb(__webpack_require__(20));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(5).then((function(require) {
		cb(__webpack_require__(21));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(4).then((function(require) {
		cb(__webpack_require__(22));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(3).then((function(require) {
		cb(__webpack_require__(23));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(2).then((function(require) {
		cb(__webpack_require__(24));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(1).then((function(require) {
		cb(__webpack_require__(25));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(cb) {
	__webpack_require__.e/* require.ensure */(0).then((function(require) {
		cb(__webpack_require__(26));
	}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function $get(endpoint, query) {
  query = query || {};

  var esc = encodeURIComponent;

  var keys = Object.keys(query);

  var url = endpoint;
  if (keys.length > 0) {
    url += '?' + keys.map(function (k) {
      var value = query[k];
      if (value == null || value == '') {
        return '';
      } else {
        return esc(k) + '=' + esc(value);
      }
    }).join('&');
  }

  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
    credentials: 'same-origin',
  })
  .then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      return resp.json().then(function (j) { return Promise.resolve(j); });
    } else {
      return resp.json().then(function (j) { return Promise.reject(j); });
    }
  });
}


/***/ })
/******/ ]);