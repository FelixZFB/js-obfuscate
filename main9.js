const code = `
    console.log('abc');
    console.log('cde');
    console.log('efg');
    console.log('hij');    
`;

const options = {
  compact: false,
  deadCodeInjection: true, // 僵尸代码注入
  deadCodeInjectionThreshold: 1 // 控制僵尸代码注入的比例，取值 0 到 1，默认是 0.4
};

const obfuscator = require('javascript-obfuscator');

function obfuscate(code, options) {
  return obfuscator.obfuscate(code, options).getObfuscatedCode()
}

console.log(obfuscate(code, options));