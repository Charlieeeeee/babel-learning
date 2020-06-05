'use strict';

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _desc, _value, _class;

var _tool = require('./tool.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var arr = [1, 2, 3];
(function () {
    console.log(arr.indexOf(1) !== -1);
    console.log('千分化：', (0, _tool.qianFen)('98623982343982'));
})();

var pro = new _promise2.default(function (resolve, reject) {
    setTimeout(function () {
        resolve('ok');
    }, 1000);
});

var say = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var res;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return pro;

                    case 2:
                        res = _context.sent;

                        console.log('I am ' + res);

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function say() {
        return _ref.apply(this, arguments);
    };
}();

say();

var ask = function ask(target, name, descriptor) {
    //target是DoSome.prototype,可以获取到实例的所有方法，但是不能获取到属性
    console.log('What do you say?');
    target.rap();
    return descriptor;
};
var DoSome = (_class = function () {
    function DoSome() {
        (0, _classCallCheck3.default)(this, DoSome);

        this.user = 'charlie';
    }

    (0, _createClass3.default)(DoSome, [{
        key: 'sayHi',
        value: function sayHi() {
            console.log('I say Hi.');
        }
    }, {
        key: 'rap',
        value: function rap() {
            console.log('我说鸡蛋，你说要');
        }
    }], [{
        key: 'sayHello',
        value: function sayHello() {
            console.log('I say hello.');
        }
    }]);
    return DoSome;
}(), (_applyDecoratedDescriptor(_class.prototype, 'sayHi', [ask], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'sayHi'), _class.prototype)), _class);


var doSome = new DoSome();
doSome.sayHi();
console.log(doSome.user);
// DoSome.sayHello();