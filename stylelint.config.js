module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-styled-components",
    "stylelint-config-recommended",
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'selector-pseudo-element-colon-notation': 'single',
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'function-name-case': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-empty-source': null,
  },
};
