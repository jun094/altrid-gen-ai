module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react'],
  rules: {
    'react/prop-types': ['off'],
    'linebreak-style': ['error', 'unix'],
    'no-empty': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-console': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
  },
  settings: { react: { version: 'detect' } },
};
