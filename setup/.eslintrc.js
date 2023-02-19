module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    //
    // 'plugin:react/recommended',
    "plugin:react-hooks/recommended",
    // 'airbnb',
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:cypress/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    //
    // 'react',
    "@typescript-eslint",
    "simple-import-sort",
    "import",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        moduleDirectory: ["node_modules", "src/"], // 절대경로 노드 설정
      },
    },
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
  },
  ignorePatterns: ["*.test.tsx", "*.test.ts", "*.js"],
};
