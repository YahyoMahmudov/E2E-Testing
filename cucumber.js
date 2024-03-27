module.exports = {
  default: {
    tags: '@report',
    formatOptions: {
      snippetInterface: 'async-await'
    },
    format: ['./reporter.js'],

    paths: ['src/test/features/'],
    dryRun: false,
    require: ['src/test/steps/*.ts', 'src/hooks/hooks.ts'],
    requireModule: ['ts-node/register']
  }
};
