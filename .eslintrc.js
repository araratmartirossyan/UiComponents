module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  plugins: [
    'vue'
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'no-shadow': ['error'],
    'linebreak-style': 0,
    'import/prefer-default-export': 'off',
    'arrow-parens': 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state',
        'acc',
        'e'
      ]
    }],
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
