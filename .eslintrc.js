module.exports = {
  ignorePatterns: ['node_modules/', 'dist/', 'allure-report'],
  env: {
    node: true,
    es6: true
  },
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
    'no-console': 'error',
    'no-unused-vars': 'error',
    'comma-dangle': 'off',
    'no-trailing-spaces': 'error',
    'max-len': ['error', {code: 140}],
    'arrow-spacing': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
