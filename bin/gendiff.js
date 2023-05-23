#!/usr/bin/env node
import { program } from 'commander';
import gendiff from '../src/index.js';


program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('1.0.0');

program.command('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'display help for command')
  .option('-f, --format [type]', 'outpur usage information')
  .action((filepath1, filepath2) => {
    const option = program.opts();
    console.log(gendiff(filepath1, filepath2, option.format));
  });

program.parse(process.argv);