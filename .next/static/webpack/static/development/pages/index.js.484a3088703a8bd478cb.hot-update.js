webpackHotUpdate('static/development/pages/index.js', {
  /***/ './node_modules/@babel/runtime-corejs2/core-js/date/now.js':
    /*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
        /*! core-js/library/fn/date/now */ './node_modules/core-js/library/fn/date/now.js',
      )

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js':
    /*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _arrayWithHoles
        },
      )
      /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../core-js/array/is-array */ './node_modules/@babel/runtime-corejs2/core-js/array/is-array.js',
      )
      /* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__,
      )

      function _arrayWithHoles(arr) {
        if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr))
          return arr
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js':
    /*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _iterableToArrayLimit
        },
      )
      /* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ../../core-js/get-iterator */ './node_modules/@babel/runtime-corejs2/core-js/get-iterator.js',
      )
      /* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__,
      )
      /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../core-js/is-iterable */ './node_modules/@babel/runtime-corejs2/core-js/is-iterable.js',
      )
      /* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__,
      )

      function _iterableToArrayLimit(arr, i) {
        if (
          !(
            _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(
              Object(arr),
            ) || Object.prototype.toString.call(arr) === '[object Arguments]'
          )
        ) {
          return
        }

        var _arr = []
        var _n = true
        var _d = false
        var _e = undefined

        try {
          for (
            var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(
                arr,
              ),
              _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value)

            if (i && _arr.length === i) break
          }
        } catch (err) {
          _d = true
          _e = err
        } finally {
          try {
            if (!_n && _i['return'] != null) _i['return']()
          } finally {
            if (_d) throw _e
          }
        }

        return _arr
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js':
    /*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _nonIterableRest
        },
      )
      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance',
        )
      }

      /***/
    },

  /***/ './node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js':
    /*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'default',
        function() {
          return _slicedToArray
        },
      )
      /* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! ./arrayWithHoles */ './node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js',
      )
      /* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ./iterableToArrayLimit */ './node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js',
      )
      /* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ./nonIterableRest */ './node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js',
      )

      function _slicedToArray(arr, i) {
        return (
          Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__['default'])(
            arr,
          ) ||
          Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__['default'])(
            arr,
            i,
          ) ||
          Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__['default'])()
        )
      }

      /***/
    },

  /***/ './node_modules/core-js/library/fn/date/now.js':
    /*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      __webpack_require__(
        /*! ../../modules/es6.date.now */ './node_modules/core-js/library/modules/es6.date.now.js',
      )
      module.exports = __webpack_require__(
        /*! ../../modules/_core */ './node_modules/core-js/library/modules/_core.js',
      ).Date.now

      /***/
    },

  /***/ './node_modules/core-js/library/modules/es6.date.now.js':
    /*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      // 20.3.3.1 / 15.9.4.4 Date.now()
      var $export = __webpack_require__(
        /*! ./_export */ './node_modules/core-js/library/modules/_export.js',
      )

      $export($export.S, 'Date', {
        now: function() {
          return new Date().getTime()
        },
      })

      /***/
    },

  /***/ './pages/index.tsx':
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /*! no exports provided */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict'
      __webpack_require__.r(__webpack_exports__)
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/define-property */ './node_modules/@babel/runtime-corejs2/core-js/object/define-property.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/define-properties */ './node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ './node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/object/keys */ './node_modules/@babel/runtime-corejs2/core-js/object/keys.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__,
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/date/now */ './node_modules/@babel/runtime-corejs2/core-js/date/now.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6__,
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ './node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        /*! @babel/runtime-corejs2/core-js/json/stringify */ './node_modules/@babel/runtime-corejs2/core-js/json/stringify.js',
      )
      /* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8__,
      )
      /* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
        /*! @babel/runtime-corejs2/helpers/esm/defineProperty */ './node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js',
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
        /*! react */ './node_modules/react/index.js',
      )
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_10__,
      )
      /* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
        /*! immer */ './node_modules/immer/dist/immer.module.js',
      )

      var _jsxFileName =
        '/home/barko187/Workspace/React/react-next-amplify-graphql/pages/index.tsx'
      var __jsx = react__WEBPACK_IMPORTED_MODULE_10__['createElement']

      function ownKeys(object, enumerableOnly) {
        var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(
          object,
        )
        if (
          _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a
        ) {
          var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(
            object,
          )
          if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
              return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(
                object,
                sym,
              ).enumerable
            })
          keys.push.apply(keys, symbols)
        }
        return keys
      }

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}
          if (i % 2) {
            ownKeys(source, true).forEach(function(key) {
              Object(
                _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[
                  'default'
                ],
              )(target, key, source[key])
            })
          } else if (
            _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a
          ) {
            _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(
              target,
              _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(
                source,
              ),
            )
          } else {
            ownKeys(source).forEach(function(key) {
              _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(
                target,
                key,
                _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(
                  source,
                  key,
                ),
              )
            })
          }
        }
        return target
      }

      var reducer = function reducer(state, action) {
        switch (action.type) {
          case 'set-current': {
            return Object(immer__WEBPACK_IMPORTED_MODULE_11__['default'])(
              state,
              function(draft) {
                draft.currentTodo = action.payload
              },
            )
          }

          case 'add': {
            return Object(immer__WEBPACK_IMPORTED_MODULE_11__['default'])(
              state,
              function(draft) {
                draft.todos.push(action.payload)
              },
            )
          }

          case 'update': {
            var todoIndex = state.todos.findIndex(function(todo) {
              return todo.id === action.payload.id
            })
            if (todoIndex === -1) return state
            return Object(immer__WEBPACK_IMPORTED_MODULE_11__['default'])(
              state,
              function(draft) {
                draft.todos[todoIndex] = _objectSpread({}, action.payload)
              },
            )
          }

          case 'delete': {
            var _todoIndex = state.todos.findIndex(function(todo) {
              return todo.id === action.payload.id
            })

            if (_todoIndex === -1) return state
            return Object(immer__WEBPACK_IMPORTED_MODULE_11__['default'])(
              state,
              function(draft) {
                draft.todos.splice(_todoIndex, 1)
              },
            )
          }

          default: {
            throw new Error(
              'Unsupported action '.concat(
                _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_8___default()(
                  action,
                ),
              ),
            )
          }
        }
      }

      var App = function App() {
        // The reducer defined before
        var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_10__[
            'useReducer'
          ](reducer, {
            currentTodo: '',
            todos: [],
          }),
          _React$useReducer2 = Object(
            _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_7__[
              'default'
            ],
          )(_React$useReducer, 2),
          state = _React$useReducer2[0],
          dispatch = _React$useReducer2[1]

        var add = function add() {
          dispatch({
            type: 'add',
            payload: {
              id: nanoid(),
              name: state.currentTodo,
              completed: false,
              createdAt: ''.concat(
                _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_6___default()(),
              ),
            },
          })
          dispatch({
            type: 'set-current',
            payload: '',
          })
        }

        var edit = function edit(
          todo,
          /*:Todo*/
        ) {
          dispatch({
            type: 'update',
            payload: todo,
          })
        }

        var del = function del(
          todo,
          /*:Todo*/
        ) {
          dispatch({
            type: 'delete',
            payload: todo,
          })
        }

        return __jsx(
          react__WEBPACK_IMPORTED_MODULE_10__['Fragment'],
          null,
          __jsx(
            'header',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79,
              },
              __self: this,
            },
            __jsx(
              'h2',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                },
                __self: this,
              },
              'To Do List',
            ),
          ),
          __jsx(
            'main',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82,
              },
              __self: this,
            },
            __jsx(
              'form',
              {
                onSubmit: function onSubmit(event) {
                  event.preventDefault()
                  add(state.currentTodo)
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                },
                __self: this,
              },
              __jsx('input', {
                type: 'text',
                value: state.currentTodo,
                onChange: function onChange(event) {
                  dispatch({
                    type: 'set-current',
                    payload: event.target.value,
                  })
                },
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                },
                __self: this,
              }),
              __jsx(
                'button',
                {
                  type: 'submit',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                  },
                  __self: this,
                },
                'Add',
              ),
            ),
            __jsx(
              'ul',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                },
                __self: this,
              },
              state.todos.map(function(todo) {
                return __jsx(
                  'li',
                  {
                    key: todo.id,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 101,
                    },
                    __self: this,
                  },
                  __jsx('input', {
                    type: 'text',
                    value: todo.name,
                    onChange: function onChange(event) {
                      edit(
                        _objectSpread({}, todo, {
                          name: event.target.value,
                        }),
                      )
                    },
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                    },
                    __self: this,
                  }),
                  __jsx(
                    'button',
                    {
                      onClick: function onClick() {
                        del(todo)
                      },
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                      },
                      __self: this,
                    },
                    'Delete',
                  ),
                )
              }),
            ),
          ),
        )
      }

      /***/
    },
})
//# sourceMappingURL=index.js.484a3088703a8bd478cb.hot-update.js.map
