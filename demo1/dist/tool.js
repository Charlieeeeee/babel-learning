'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var qianFen = exports.qianFen = function qianFen(numStr) {
    return numStr.replace(/(?!^)(?=(\d{3})+$)/g, ',');
};