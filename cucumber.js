const path = require('path');

module.exports = {
  default: {
    formatOptions: {
      snippetInterface: 'async-await'
    },
    format: [path.resolve(__dirname, 'reporter.js')],

    paths: ['src/test/features/'],
    dryRun: false,
    require: ['src/test/steps/*.ts'],
    requireModule: ['ts-node/register']
  }
};
