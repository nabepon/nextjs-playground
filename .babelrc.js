module.exports = {
  plugins: [
    [
      'transform-define',
      Object.keys(process.env).reduce((result, key) => {
        result['process.env.' + key] = process.env[key];
        return result;
      }, {}),
    ],
  ],
  env: {
    development: {
      plugins: [['emotion', { sourceMap: true }]],
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    production: {
      plugins: ['emotion'],
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    test: {
      plugins: [['emotion', { sourceMap: true }]],
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
        '@zeit/next-typescript/babel',
      ],
    },
  },
};
