"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('adds 1 and 2 should be 3', function () {
    expect((0, index_1.add)(1, 2)).toBe(3);
});
test('test 1 and -2', function () {
    expect((0, index_1.add)(1, -2)).toBe(-1);
});
