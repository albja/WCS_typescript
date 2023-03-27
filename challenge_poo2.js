"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assert_1 = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (pin) {
        return this.pin === pin;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
assert_1.default.equal(typeof customer.getName, 'function');
assert_1.default.equal(typeof customer.verifyPinInput, 'function');
assert_1.default.equal(customer.getName(), 'John Doe');
assert_1.default.ok(customer.verifyPinInput('3579'));
