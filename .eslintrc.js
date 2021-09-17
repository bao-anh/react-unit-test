module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  parser: 'babel-eslint',
  rules: {
    'max-len': ['error', { code: 120, ignoreComments: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    semi: ['error', 'always'],
  },
  env: {
    browser: true,
    node: true,
  },
};
