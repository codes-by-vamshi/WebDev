let name1 = {
    fname: 'AA',
    lname: 'BB'
}

let name2 = {
    fname: 'CC',
    lname: 'DD'
}

const generalLog = function (state, city) {
    console.log(this.fname, this.lname, state, city);
}

generalLog.call(name1, 'aaState', 'bbCity');
generalLog.call(name2, 'ccState', 'ddCity');

generalLog.apply(name1, ['aaState', 'bbCity']);
generalLog.apply(name2, ['ccState', 'ddCity']);

// binding
const bindingName1WithGeneralLog = generalLog.bind(name1, 'aaState', 'bbCity');
const bindingName2WithGeneralLog = generalLog.bind(name2, 'ccState');

bindingName1WithGeneralLog();
bindingName2WithGeneralLog('ddCity');

// building bind (polyfill for bind method)

Function.prototype.myBind = function (...args1) {
    const aa = this;
    const aaa = args1.slice(1);
    return function (...args2) {
        aa.apply(args1[0], [...aaa,...args2])
    }
}

const customBindingName1WithGeneralLog = generalLog.myBind(name1, 'aaState');
customBindingName1WithGeneralLog('bbCity');