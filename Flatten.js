// 给定一个“Flatten”对象其键是点分割的，例如:{"A":1,"B.A":2,"B.B":3,"CC.D.E":4,"CC.D.F":5},实现一个函数，将其转换 为一个嵌套的字典对象，根据上面例子，嵌套对象结果为{A:1,"B":{"A":2,"B":3},"CC":{"D":{"E":4,"F":5}}}