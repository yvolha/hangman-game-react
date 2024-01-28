module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh', "@typescript-eslint", "prettier"],
  settings: {
    "react": {
      "version": "detect",
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'function-paren-newline': 'error',
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-unused-expressions": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-reqiures": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
  },
}
