const presets = [
  [
    "@babel/preset-env",
    {
      "targets": {
        "node": "0.1"
      }
    }
  ]
]

module.exports = { presets, plugins: ["@babel/plugin-transform-runtime"] };