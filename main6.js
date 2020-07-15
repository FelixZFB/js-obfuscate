// 变量名混淆和代码压缩一行，自定义变量名前缀


// 创建一个code变量，里面的字符串就是要混淆的js代码
// 多段代码使用 + 号链接(python中语法书写)，代码末尾要加上换行符，单引号要加上转移符，不然会报错

const code = "var a = \'hello world\'"
;

// 创建一个options变量，定义混淆选项，是一个 Object 对象
// 使用了控制流扁平化的选项，打乱函数原有代码执行流程及函数调用关系，使代码逻变得混乱无序，降低代码可读性
const options = {
   stringArray: true, // 字符串混淆(一个字符串声明放到一个数组里面)，默认为true，如果false，就显示原始代码，可以这只false，输出结果就是上面原始代码，数字1，用的机器编码
   rotateStringArray: true, // 控制数组化后结果的元素顺序，默认为 true
   stringArrayEncoding: false, // 默认不开启编码，如果设置为 true 或 base64，则会使用 Base64 编码，如果设置为 rc4，则使用 RC4 编码
   stringArrayThreshold: 1, // 启用编码的概率，范围 0 到 1，默认 0.8
   compact: false,  // 代码压缩一行，默认是true,此处改为false，不压缩一行
};

// 引入了 javascript-obfuscator 库
const obfuscator = require('javascript-obfuscator');

// 然后定义了一个方法，传入 code 和 options，来获取混淆后的代码
function obfuscate(code, options) {
   return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

// 控制台输出混淆后的代码
console.log(obfuscate(code, options));

// CMD窗口运行js文件：node main2.js
// 输出的结果就是上面code变量中两行代码被混淆后的结果
