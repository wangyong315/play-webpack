module.exports = {
  extends: 'airbnb',
  rules: {
    'linebreak-style': ['off', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  globals: {
    localStorage: true,
    window: true,
    document: true,
  },
};
