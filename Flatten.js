/**
 * 给定一个“Flatten”对象其键是点分割的，例如:{"A":1,"B.A":2,"B.B":3,"CC.D.E":4,"CC.D.F":5},实现一个函数，将其转换 为一个嵌套的字典对象，根据上面例子，嵌套对象结果为{A:1,"B":{"A":2,"B":3},"CC":{"D":{"E":4,"F":5}}}
 */
const obj = {"A": 1, "B.A": 2, "B.B": 3, "CC.D.E": 4, "CC.D.F": 5};
// {A:1,"B":{"A":2,"B":3},"CC":{"D":{"E":4,"F":5}}}
const m = new Map(Object.entries(obj));
const t = new Map();
let commonKeys = [];
m.forEach((index, item) => {
    if (!item.includes('.') && item !== '') {
        t.set(item, m.get(item));
        m.delete(item)
    } else {
        const [k1, ...args] = item.split('.');
        const index = commonKeys.findIndex(item => item === k1);
        if (index <= -1) {
            commonKeys.push(k1);
        }
    }
});
commonKeys.forEach((elem) => {
    m.forEach((index, item) => {
        const _temps = item.split('.');
        if (_temps.includes(elem) && _temps.length === 2) {
            const k1 = _temps[1];
            const temp = t.get(elem) || {};
            t.set(elem, Object.assign({}, temp, {[k1]: m.get(item)}));
            // m.delete(item)
        } else {
            const [k2, ...args] = _temps;
            const v2 = m.get(item);
            const f = t.get(item) || {}
            t.set(k2, Object.assign({}, f, t.get(k2), {[args.join('.')]: v2}));
            // m.delete(item);
        }
        m.delete(item);
        if (m.size === 0) {
            const _commnKeys = new Map();
            t.forEach((value, key) => {
                if (Object.prototype.toString.call(value) !== "[object Null]" && Object.prototype.toString.call(value) === "[object Object]" && JSON.stringify(value).includes('.')) {
                    Object.keys(value).forEach(item => {
                        const tempKeys = item.split('.');
                        tempKeys.forEach((k) => {
                            let _key = _commnKeys.get(k);
                            if (_key) {
                                _commnKeys.set(k, _key += 1);
                                if (_commnKeys.get(k) === 2) {
                                    const o = {}
                                    Object.keys(t.get(key)).forEach(e => {
                                        const x1 = e.split('.')[1];
                                        o[x1] = t.get(key)[e];
                                    });
                                    t.set(key, {[k]: o})
                                }
                            } else {
                                _commnKeys.set(k, 1)
                            }
                        });
                    });
                }
            });
        }


    })
})


console.log(t);
