"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
exports.Calculator = {
    res: 0,
    from(value) {
        this.res = value;
        return this;
    },
    add(value) {
        this.res += value;
        return this;
    },
    mul(value) {
        this.res *= value;
        return this;
    },
    sub(value) {
        this.res -= value;
        return this;
    },
    div(value) {
        this.res /= value;
        return this;
    },
    calc() {
        return this.res;
    }
};
