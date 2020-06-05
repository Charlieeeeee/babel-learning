# ES6转ES5

1. 第一步
   - 全局安装babel-cli
    > npm install -g babel-cli
   - 本地安装

    ```"babel-cli": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-plugin-array-includes": "^2.0.3",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-2": "^6.24.1"
    ```

2. 新建.babelrc

```{
        "presets": [
        ["env", {
            "targets": {
            "browsers": ["IE >= 9"]
            },
            "useBuiltIns": "usage"
        }],
        "stage-2"
        ],
        "plugins": [
            "array-includes",
            ["transform-runtime", {
            "helpers": true,
            "polyfill": true,
            "regenerator": true,
            "moduleName": "babel-runtime"
            }]
        ]
}
```

3. 执行命令
    > babel src --out-dir dist
    > or
    > babel src -d dist
    > 可以把src里js文件编译后的结果输出到dist目录里
