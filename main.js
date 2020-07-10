// 创建一个code变量，里面的字符串就是要混淆的js代码
const code =
    'let x = \'1\' + 1\n'
    +
    'console.log(\'x\', x)'
;

// 创建一个options变量，定义混淆选项，是一个 Object 对象
// 使用了控制流扁平化的选项，
const options = {
   compact: false,
   controlFlowFlattening: true
};

// 引入了 javascript-obfuscator 库
const obfuscator = require('javascript-obfuscator');

// 然后定义了一个方法，传入 code 和 options，来获取混淆后的代码
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

// 控制台输出混淆后的代码
console.log(obfuscate(code, options));

// CMD窗口运行js文件：node main.js
