// 代码控制流扁平化(代码打乱重新编码)和代码不压缩一行


// 创建一个code变量，里面的字符串就是要混淆的js代码
// 多段代码使用 + 号链接(python中语法书写)，代码末尾要加上换行符，单引号要加上转移符，不然会报错

// 长代码，写在一行，放在双引号中间，参考main7.js
// const code = "let x = '1' + 1;console.log('x:', x);";

// 使用tab键上面的引号，实现类似于python中双引号功能，里面可以书写大量带格式代码,推荐使用
// const code = `
// let x = \'1\' + 1\n;
// console.log(\'x:\', x);
// `;

const code =
    "let x = \'1\' + 1\n;"
    +
    "console.log(\'x:\', x);"
;

// 创建一个options变量，定义混淆选项，是一个 Object 对象
// controlFlowFlattening控制流扁平化的选项，打乱函数原有代码执行流程及函数调用关系，使代码逻变得混乱无序，降低代码可读性
const options = {
   compact: false,  // 代码压缩一行，默认是true,此处改为false，不压缩一行
   controlFlowFlattening: true, // 默认不开启，设置true，打乱函数原有代码执行流程及函数调用关系
};

// 引入了 javascript-obfuscator 库
const obfuscator = require('javascript-obfuscator');

// 然后定义了一个方法，传入 code 和 options，来获取混淆后的代码
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

// 控制台输出混淆后的代码
console.log(obfuscate(code, options));

// CMD窗口运行js文件：node main1.js
// 输出的结果就是上面code变量中两行代码被混淆后的结果

