const isRemove = false;
module.exports = {
  "presets": [
    [
      "@babel/preset-env",
      {
        "useBuiltIns": "entry"
      }
    ]
  ],
  "plugins": [
    ["./remove.log.babel.js", { "exclude": isRemove ? [] : [ "error", "warn", "log"] }]
  ]
}