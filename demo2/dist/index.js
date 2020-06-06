"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));

var _class;

console.log([1, 2].indexOf(1) !== -1);

var readonly = function readonly(target, name, description) {
  console.log('this is read only');
  description.writable = false;
  return;
};

var A = (_class = /*#__PURE__*/function () {
  function A() {
    (0, _classCallCheck2["default"])(this, A);
  }

  (0, _createClass2["default"])(A, [{
    key: "myName",
    value: function myName() {
      return 'charlie';
    }
  }]);
  return A;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class.prototype, "myName", [readonly], Object.getOwnPropertyDescriptor(_class.prototype, "myName"), _class.prototype)), _class);