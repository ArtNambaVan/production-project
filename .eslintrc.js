module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: [
    'react',
    'i18next'
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    'no-unused-vars': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    'i18next/no-literal-string': ['error', { markupOnly: true }],
    '@typescript-eslint/explicit-function-return-type': 'warn'
  },
  globals: {
    __IS_DEV__: true
  }
}