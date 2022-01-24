export const Calculator = {
    res: 0,
    from(value: number) {
        this.res = value;
        return this;
    },
    add(value: number) {
        this.res += value;
        return this;
    },
    mul(value: number) {
        this.res *= value;
        return this;
    },
    sub(value: number) {
        this.res -= value;
        return this;
    },
    div(value: number) {
        this.res /= value;
        return this;
    },
    calc() {
        return this.res;
    }
};
