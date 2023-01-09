module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": false,
    "es6": true,
    "node": true,
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
    },
    "sourceType": "module",
  },
  "plugins": ["react"],
  "rules": {
    "react/prop-types": ["off"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": [
      "warn",
      { "allow": ["clear", "info", "error", "dir", "trace"] },
    ],
      },
};
