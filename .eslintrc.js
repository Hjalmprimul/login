module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    allowShortCircuit: 'off',
    allowTernary: 'off',
    allowTaggedTemplates: 'off',
    enforceForJSX: 'off',
    'no-unused-vars': 'off',
    'prefer-regex-literals': 'off'
  }
}
