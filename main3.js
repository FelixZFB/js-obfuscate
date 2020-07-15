// 变量名混淆和代码压缩一行


// 创建一个code变量，里面的字符串就是要混淆的js代码
// 多段代码使用 + 号链接(python中语法书写)，代码末尾要加上换行符，单引号要加上转移符，不然会报错

const code =
    "let hello = \'1\' + 1\n"
    +
    "console.log(\'hello:\', hello)"
;

// 创建一个options变量，定义混淆选项，是一个 Object 对象
// 使用了控制流扁平化的选项，打乱函数原有代码执行流程及函数调用关系，使代码逻变得混乱无序，降低代码可读性
const options = {
   stringArray: true, // 字符串混淆，默认为true，如果false，就显示原始代码，可以这只false，输出结果就是上面原始代码，数字1，用的机器编码
   compact: false,  // 代码压缩一行，默认是true,此处改为false，不压缩一行
   identifierNamesGenerator: 'mangled', // 变量名替换为普通字符，参数默认为 hexadecimal 替换为 16 进制形式的字符串
};

// 引入了 javascript-obfuscator 库
const obfuscator = require('javascript-obfuscator');

// 然后定义了一个方法，传入 code 和 options，来获取混淆后的代码
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

// 控制台调用该方法输出混淆后的代码
console.log(obfuscate(code, options));

// CMD窗口运行js文件：node main2.js
// 输出的结果就是上面code变量中两行代码被混淆后的结果
