#!/usr/bin/env node

const { program } = require('commander');
const pckg = require('../package.json');
const init = require('../lib/init');

function onFatalError(error) {
    process.exitCode = 2;

    console.error(`
        Oops! Something went wrong! :(
        ${error.message}`);
}

process.on('uncaughtException', onFatalError);
process.on('unhandledRejection', onFatalError);

program.version(pckg.version, '-v, --version', 'Outputs the current version');

program
    .command('init')
    .description('Initalize new tig repo')
    .action(() => init());

program.parse(process.argv);
