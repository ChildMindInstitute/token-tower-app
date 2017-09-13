module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest",
  ],
  "rules": {
    "max-len": ["error", { "code": 110, "ignoreComments": true }],
    "no-underscore-dangle": 0,
    "react/require-default-props": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-max-props-per-line": [2, { "maximum": 2, "when": "multiline" }],
    "comma-dangle": ["error", "never"],
    "react/jsx-no-bind": ["error", {
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowBind": false
    }],
  }
};
