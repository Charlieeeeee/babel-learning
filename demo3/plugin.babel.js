// import babel from '@babel/core';
const babel = require('@babel/core');

const code = 'const n = 1';

const output = babel.transformSync(code, {
  plugins: [
    // 你的第一个插件 ??
    function myCustomPlugin() {
      return {
        visitor: {
          Identifier(path) {
            // 在这个例子里我们将所有变量 `n` 变为 `x`
            if (path.isIdentifier({ name: 'n' })) {
              path.node.name = 'x';
            }
          },
        },
      };
    },
  ],
});

console.log(output.code); // 'const x = 1;'