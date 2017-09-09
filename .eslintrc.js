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
    "no-underscore-dangle": 0,
    "react/jsx-filename-extension": 0,
    "comma-dangle": ["error", "never"],
    "react/jsx-no-bind": ["error", {
      "ignoreRefs": false,
      "allowArrowFunctions": false,
      "allowBind": false
    }],
  }
};
