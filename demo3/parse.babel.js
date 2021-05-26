// import { parse } from '@babel/parser';
// import traverse from '@babel/traverse';
// import generate from '@babel/generator';
const { parse } = require('@babel/parser');
const { default: traverse } = require('@babel/traverse');
const { default: generate } = require('@babel/generator');

const code = 'const n = 1';

// 将源代码转换为AST
const ast = parse(code);

// 转换AST
traverse(ast, {
  enter(path, state) {
    // in this example change all the variable `n` to `x`
    if (path.isIdentifier({ name: 'n' })) {
      path.node.name = 'x';
    }
  },
});

// 生成代码 <- ast
const output = generate(ast, code);
console.log(output.code); // 'const x = 1;'