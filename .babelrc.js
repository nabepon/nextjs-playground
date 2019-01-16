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
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    production: {
      presets: ['next/babel', '@zeit/next-typescript/babel'],
    },
    test: {
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
