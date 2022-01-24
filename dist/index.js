"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = require("./calculator");
console.assert(calculator_1.Calculator.from(3).add(2).mul(5).sub(7).div(6).calc() === 3);
/*
console.assert(Calculator.from(2).add(2).mul(2).calc() === 6);
console.assert(Calculator.from(3).add(2).mul(5).sub(12).div(6).calc() === 11);
*/
