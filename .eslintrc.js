module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb/hooks",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "airbnb",
    "react-app",
    "prettier",
    "prettier/babel",
    "plugin:prettier/recommended",
    "prettier/react"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "babel",
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "printWidth": 140,
        "trailingComma": "all",
        "tabWidth": 2,
        "semi": true,
        "singleQuote": true,
        "arrowParens": "avoid",
        "bracketSpacing": true
      }
    ],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": [
          "/ <reference"
        ]
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/prop-types": "off",
    "react/default-props-match-prop-types": "off",
    "@typescript-eslint/prefer-interface": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/destructuring-assignment": "off",
    "react-hooks/exhaustive-deps": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/**.test.tsx",
          "setupEnzyme.ts"
        ],
        "peerDependencies": false
      }
    ]
  }
};
