const code ="(function(){function foo () {return function () {var sum = 1 + 2;console.log(1);console.log(2);console.log(3);console.log(4);console.log(5);console.log(6);}}foo()();})();";

const options = {
  compact: false,
  controlFlowFlattening: false, // 默认是false，开启true,打乱函数关系，关闭后函数逻辑关系保持不变
};


// 引入了 javascript-obfuscator 库
const obfuscator = require('javascript-obfuscator');

// 然后定义了一个方法，传入 code 和 options，来获取混淆后的代码
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

// 控制台输出混淆后的代码
console.log(obfuscate(code, options));

// CMD窗口运行js文件：node main8.js
// 输出的结果就是上面code变量中两行代码被混淆后的结果