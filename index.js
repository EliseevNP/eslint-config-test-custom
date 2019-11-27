module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  env: {
    es6: true,
    node: true,
  },
  plugins: [
    'jest',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['accum'],
    }],
    'no-restricted-syntax': [
      'off',
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
    ],
    'no-await-in-loop': 'warn',
    'no-console': 'off',
    'camelcase': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  globals: {
    before: true,
    beforeEach: true,
    after: true,
    afterEach: true,
    it: true,
    describe: true,
  },
}
