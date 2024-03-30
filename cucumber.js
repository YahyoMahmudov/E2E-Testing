const path = require('path');

module.exports = {
  default: {
    tags: '@report',
    formatOptions: {
      snippetInterface: 'async-await'
    },
    format: [path.resolve(__dirname, 'reporter.js')],

    paths: ['src/test/features/'],
    dryRun: false,
    require: ['src/test/steps/*.ts', 'src/hooks/hooks.ts'],
    requireModule: ['ts-node/register']
  }
};
